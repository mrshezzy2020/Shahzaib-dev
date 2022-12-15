import React from "react";
import Phasecard from "../Cards/Phasecard";
export default function Roadmap() {
  return (
    <>
      <div className="Hero-img-bg">
        <div className="road">
          <h2 style={{ paddingTop: "2rem" }}>Road Map</h2>
        </div>
        <div>
          <div>
            <hr
              style={{
                color: "green",
                height: "10px",
                left: "40rem",
              }}
            ></hr>
            <div>
              <div className="" style={{ position: "relative" }}>
                <div class="vl "></div>
              </div>
              <svg
                style={{ position: "relative", right: "31rem", bottom: "3rem" }}
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="176"
                viewBox="0 0 60 176"
                fill="none"
              >
                <path
                  opacity="0.7"
                  d="M30 176L30 40"
                  stroke="var(--primary-color13)"
                  stroke-width="2"
                  stroke-dasharray="6 6"
                ></path>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#888b8e"
                  class="fill-1"
                  fill-opacity="0.2"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="15"
                  fill="#888b8e"
                  class="fill-2"
                ></circle>
              </svg>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <Phasecard />
            </div>
            <div className="col-md-3">
              <Phasecard />
            </div>
            <div className="col-md-3">
              <Phasecard />
            </div>
            <div className="col-md-3">
              <Phasecard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
