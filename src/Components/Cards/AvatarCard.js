import React from "react";
import img1 from "../Assets/img1.jpg";

const AvatarCard = (props) => {
  return (
    <>
      <div className="card card-parent-avt tf-team " style={{}}>
        <div className="card-body">
          {/* <div className="step-title ">
            <h5 className="card-title sub-green ">01</h5>
            <h3 className="high" style={{ color: "#fff" }}>
              High Quality
            </h3>
          </div> */}
          <div className="avt-img">
            <img
              src={props.img}
              alt="Avatar"
              width="100%"
              style={{ height: "14rem" }}
            />
          </div>

          <h6 className="card-lower lower-avt " style={{ color: "#fff" }}>
            {props.name}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AvatarCard;
