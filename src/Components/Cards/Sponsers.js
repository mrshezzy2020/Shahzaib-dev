import React from "react";

import Near from "../Assets/near.png";
const Sponsers = (props) => {
  return (
    <>
      <div
        className="card card-parent tf-team "
        style={{ width: "18rem", padding: "0" }}
      >
        <div className="card-body">
          <div style={{}}>
            <img src={props.src} width={100} alt="aa" style={{}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsers;
