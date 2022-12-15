import React from "react";

const Binabox = (props) => {
  return (
    <>
      <div className="card card-parent tf-team " style={{}}>
        <div className="card-body">
          <div>
            <img src={props.img} alt="aa" />
          </div>
          <h6 style={{ color: "#fff", marginBottom: "12px" }}>{props.name}</h6>
          <p className="card-lower ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Binabox;
