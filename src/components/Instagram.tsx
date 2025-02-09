import React from "react";
import storiesData from "../Data/stories.json";
import StoryList from "./StoryList";

const Instagram: React.FC = () => {
  return (
    <div className="main-container">
      <div>
        <StoryList storiesData={storiesData} />
      </div>
    </div>
  );
};

export default Instagram;
