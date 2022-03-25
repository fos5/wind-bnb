import React from "react";
import { FaStar } from "react-icons/fa";

const Stay = ({ stay }) => {
  return (
    <div className="image-card">
      <div className="card">
        <img src={stay.photo} alt="img"></img>
        <div className="caption">
          {stay.superHost && <span className="superHost">Super Host</span>}
          <span className="rooms">
            {stay.type}
            {stay.beds !== null && <span> {stay.beds} bed(s)</span>}
          </span>
          <span>
            <FaStar color="#eb5757" />
            {stay.rating}
          </span>
        </div>
        <p>{stay.title}</p>
      </div>
    </div>
  );
};

export default Stay;
