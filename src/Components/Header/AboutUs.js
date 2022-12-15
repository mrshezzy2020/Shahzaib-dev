import React from "react";

const AboutUs = () => {
  return (
    <>
      <div
        className="parent-about"
        style={{ background: "black", padding: "59px 0 71px" }}
      >
        <h2
          style={{
            marginBotto: "1rem",
            color: "#fff",
            fontSize: "44px",
            lineHeight: "56px",
          }}
        >
          ABOUT US
        </h2>
        <p style={{ color: "#c2c3c5", fontSize: "18px", lineHeight: "28px" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat
          non proident, sunt in culpa qui officia dese runt mollit anim id est
          laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint
          occaecat
        </p>
      </div>
      <div className="d-flex w-100">
        <div
          className="itemss w-100"
          style={{ background: "black", justifyContent: "end" }}
        >
          <div className="total">
            <h6 style={{ color: "#c2c3c5" }}>Total Items</h6>
            <div className="content">
              <span>2240+</span>
            </div>
          </div>
        </div>

        <div
          className="itemss w-100"
          style={{ background: "black", justifyContent: "start" }}
        >
          <div className="total">
            <h6 style={{ color: "#c2c3c5" }}>Profiles Whitelisted</h6>
            <div className="content">
              <span>1000+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
