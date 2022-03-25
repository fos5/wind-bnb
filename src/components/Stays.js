import React from "react";
import Stay from "./Stay";

const Stays = ({ stays }) => {
  return (
    <div id="imageCard">
      {stays.map((stay) => (
        <Stay key={stay.id} stay={stay} />
      ))}
    </div>
  );
};

export default Stays;
