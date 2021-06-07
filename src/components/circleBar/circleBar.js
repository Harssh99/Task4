import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactStars from "react-rating-stars-component";

import "./circleBar.css";

const percentage = 90;

function circleBar() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bar">
      {/* Attendance */}
      <div className="bar__attendance">
        <p className="bar__heading">Attendance</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="bar__info">
          Last absence <br />
          12th May, 12:00 PM
        </p>
      </div>

      <div className="bar__tests">
        <p className="bar__heading">Tests</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className="bar__info">
          Last Test <br /> 100 %
        </p>
      </div>

      <div className="bar__rating">
        <p className="bar__heading">HW Rating</p>

        <div className="bar__stars">
          <ReactStars
            value={4.1}
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#EFD75B"
          />
          <p className="bar__rating">(4.1)</p>
          <p className="bar__info">
            Last Homework <br />
            4.5
          </p>
        </div>
      </div>
    </div>
  );
}

export default circleBar;