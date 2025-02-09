import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import StoryViewer from "./StoryViewer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StoriesData, UserStory } from "../types/types";

interface StoryListProps {
  storiesData: StoriesData;
}

const StoryList: React.FC<StoryListProps> = ({ storiesData }) => {
  const [selectedUser, setSelectedUser] = useState<UserStory | null>(null);
  const storyListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (storyListRef.current) {
      storyListRef.current.scrollLeft = 0;
    }
  }, []);

  const handleStoryClick = useCallback((user: UserStory) => {
    setSelectedUser(user);
  }, []);

  return (
    <div className="story-container">
      <h3>Instagram</h3>
      <div className="story-list" ref={storyListRef}>
        {storiesData.map((user) => (
          <div
            key={user.id}
            className="story-item"
            onClick={() => handleStoryClick(user)}
          >
            <LazyLoadImage
              src={user.profileImage}
              alt="story"
              className="story-thumbnail"
              effect="blur"
            />
            <div className="story-name">{user.name}</div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <StoryViewer
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default memo(StoryList);
