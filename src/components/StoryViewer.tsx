import React, { useState, useEffect, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UserStory } from "../types/types";

interface StoryViewerProps {
  user: UserStory;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ user, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 5);
    }, 250);

    if (progress >= 100) {
      clearInterval(interval);
      nextStory();
    }

    return () => clearInterval(interval);
  }, [progress]);

  const nextStory = () => {
    if (currentStoryIndex < user.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  const currentStory = user.stories[currentStoryIndex];

  return (
    <div className="story-viewer show">
      <div className="progress-container">
        {user.stories.map((_, index) => (
          <div key={index} className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  index === currentStoryIndex
                    ? `${progress}%`
                    : index < currentStoryIndex
                    ? "100%"
                    : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>

      <button className="close-btn" onClick={onClose}>
        ✖
      </button>

      <div className="story-header">
        <LazyLoadImage
          src={user.profileImage}
          alt="user"
          className="story-profile-pic"
          effect="blur"
        />
        <span className="story-username">{user.name}</span>
      </div>

      <div className="story-content">
        <LazyLoadImage
          src={currentStory?.image}
          alt="story"
          className="story-image"
          effect="blur"
        />
      </div>

      <div className="story-controls">
        <div className="prev-btn" onClick={prevStory}></div>
        <div className="next-btn" onClick={nextStory}></div>
      </div>
    </div>
  );
};

export default memo(StoryViewer);
