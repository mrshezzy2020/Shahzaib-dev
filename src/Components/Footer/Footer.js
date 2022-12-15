import React from "react";
import blck from "../Assets/blck.png";
const Footer = () => {
  return (
    <div className="Hero-img-bg-footer ">
      <div className="row ">
        <div className="col-md-4 ps-4">
          <div
            className="d-flex"
            style={{ justifyContent: "flex-start", marginTop: "3rem" }}
          >
            <img src={blck} alt="logo" />
          </div>

          <p
            style={{
              color: "#fff",
              fontSize: "16px",
              lineHeight: "26px",
              textAlign: "start",
            }}
          >
            We are the best way to check the rarity of NFT collection.{" "}
          </p>
        </div>
        <div className="col-md-4">
          <div
            className="d-flex gap-3"
            style={{ justifyContent: "center", marginTop: "3rem" }}
          >
            <div>
              <h6 className="title-footer ">SUBSCRIBE</h6>
              <ul
                style={{ listStyle: "none", padding: "0", textAlign: "start" }}
              >
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Home
                </li>

                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  About
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Roadmap
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Ourteam
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  FAQs
                </li>
              </ul>
            </div>
            <div>
              <h6 className="title-footer ">COMPANY</h6>
              <ul
                style={{ listStyle: "none", padding: "0", textAlign: "start" }}
              >
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  About us 2
                </li>

                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Road Map 2
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Testimonial
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Item Details
                </li>
                <li
                  style={{
                    color: "#fff",
                    paddingBottom: "6px",
                  }}
                >
                  Home
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h6 className="title-footer " style={{ marginTop: "3rem" }}>
            SUBSCRIBE
          </h6>
          <div>
            <input
              type="text"
              placeholder="Email address"
              name="mail"
              required
              className="mail"
            />
            <input type="submit" value="Subscribe" className="subm fill" />
          </div>
        </div>
      </div>
      <hr style={{ height: "2px", color: "white" }}></hr>
      <p
        style={{
          color: "#c2c3c5",
          fontSize: "14px",
          lineHeight: " 22px",
          textAlign: "start",
        }}
        className="ps-4"
      >
        BINABOX 2022 - ALL rights reserved
      </p>
    </div>
  );
};

export default Footer;
