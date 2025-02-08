import React, { useState } from "react";
import StoryViewer from "./StoryViewer";

const StoryList = ({ storiesData }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="story-container">
      <div className="story-list">
        {storiesData.map((story) => (
          <div key={story.id} className="story-item">
            <img
              src={story.profileImage}
              alt={story.name}
              className="story-thumbnail"
              onClick={() => setSelectedStory(story)}
            />
            <div className="story-name">{story.name}</div>
          </div>
        ))}
      </div>
      {selectedStory && (
        <StoryViewer
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default StoryList;
