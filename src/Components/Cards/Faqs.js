import React, { useState } from "react";
import avc from "../Assets/avc.svg";

const Faqs = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card card-parent tf-team" style={{ padding: "0" }}>
        <div className="card-body d-flex justify-content-between">
          <h2
            className="card-lower"
            style={{
              fontSize: "24px",
              color: "#fff",
              lineHeight: "56px",
              fontWeight: "400",
            }}
          >
            {props.title}
          </h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="
              green"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
