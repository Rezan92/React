import React from "react";

const Hobbies = ({ hobby }) => {
  return <li>{hobby}</li>;
};

const HobbyList = () => {
  const hobbies = [ "Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

  return (
    <div>
        <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => {
          return <Hobbies key={index} hobby={hobby} />;
        })}
      </ul>
    </div>
  );
};

export default HobbyList;
