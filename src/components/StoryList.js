import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import StoryViewer from "./StoryViewer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StoryList = ({ storiesData }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const storyListRef = useRef(null);

  useEffect(() => {
    if (storyListRef.current) {
      storyListRef.current.scrollLeft = 0;
    }
  }, []);

  // Memoize click handler
  const handleStoryClick = useCallback((user) => {
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
              effect="blur" // Lazy load with blur effect
            />
            <div className="story-name">{user.name}</div>
          </div>
        ))}
      </div>
      {selectedUser != null && (
        <StoryViewer
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default memo(StoryList);
