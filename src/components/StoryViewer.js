import React, { useEffect, useState } from "react";

const StoryViewer = ({ story, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 5000; // 5 seconds per story

  useEffect(() => {
    setProgress(0); // Reset progress when story changes

    const interval = setInterval(() => {
      setProgress((prev) => prev + 100 / (duration / 100)); // Update progress every 100ms
    }, 100);

    const timeout = setTimeout(() => {
      nextStory(); // Auto move to next story after duration
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentIndex]); // Runs when currentIndex changes

  const nextStory = () => {
    if (currentIndex < story.stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose(); // Close viewer if last story
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="story-viewer">
      <div className="progress-container">
        {story.stories.map((_, index) => (
          <div key={index} className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  index === currentIndex
                    ? `${progress}%`
                    : index < currentIndex
                    ? "100%"
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <div className="story-content">
        <img
          src={story.stories[currentIndex].image}
          alt="story"
          className="story-image"
        />
      </div>

      <div className="story-controls">
        <div className="prev-btn" onClick={prevStory} />
        <div className="next-btn" onClick={nextStory} />
      </div>
    </div>
  );
};

export default StoryViewer;
