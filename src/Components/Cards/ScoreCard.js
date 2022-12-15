import React from "react";

const ScoreCard = (props) => {
  return (
    <>
      <div className="card card-parent tf-team" style={{}}>
        <div className="card-body">
          <div className="step-title ">
            <h5 className="card-title sub-green "> {props.score}</h5>
            <h3 className="high" style={{ color: "#fff" }}>
              {props.title}
            </h3>
          </div>

          <p className="card-lower ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
