import React from "react";
import storiesData from "../mockData/stories.json";
import StoryList from "./StoryList";

const Instagram = () => {
  return (
    <>
      <div className="main-container">
        <div>Instagram</div>
        <div>
          <StoryList storiesData={storiesData} />
        </div>
      </div>
    </>
  );
};

export default Instagram;
