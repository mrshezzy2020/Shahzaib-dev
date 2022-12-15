import React from "react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import gr from "../Assets/gr.jpg";

const Header = () => {
  return (
    <>
      <div className="Hero-img mt-4" style={{ background: "black" }}>
        <div className="row">
          <div className="col-md-6">
            <div
              className="d-flex h-100"
              style={{ flexDirection: "column", justifyContent: "center" }}
            >
              {/* Anima */}

              <div class="slider">
                <div class="caption">
                  With
                  <p class="text-box">
                    <p
                      className="mb-0"
                      style={{ fontSize: "72px", fontWeight: "400" }}
                    >
                      {" "}
                      Music
                    </p>
                    <p className="mb-0">NFT</p>
                    <p className="mb-0">BINABOX</p>
                  </p>
                  <h1 style={{ textAlign: "end" }}> EXPLORE NFT COLLECTIONS</h1>
                </div>
              </div>

              {/* ANima */}
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <h1 style={{ color: "white" }}>
                  WITH <span style={{ color: "#21e786" }}>MUSIC</span> EXPLORE
                  NFT COLLECTION
                </h1>
              </div> */}
              <p className="sub">
                We are the best way to check the rarity of NFT collection
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              className="d-flex"
              style={{ alignItems: "center", height: "100%", gap: "2rem" }}
            >
              <div className="h-100">
                <img
                  src={gr}
                  alt="image"
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    height: "100%",
                  }}
                />
              </div>
              <div className="h-100">
                <img
                  src={img2}
                  alt="image"
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    height: "100%",
                  }}
                />
              </div>{" "}
              <div className="h-100">
                <img
                  src={img3}
                  alt="image"
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
