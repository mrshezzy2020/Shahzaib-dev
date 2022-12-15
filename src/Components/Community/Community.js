import React from "react";

const Community = () => {
  return (
    <div className="Hero-img-b-com">
      <div className="" style={{ marginTop: "", marginBottom: "8rem" }}>
        <h1 style={{ color: "white" }}>JOIN OUR COMMUNITY</h1>
        <p className="sub">
          We are the best way to check the rarity of NFT collection
        </p>
        <div className="d-flex gap-2" style={{ justifyContent: "center" }}>
          <div className="trending-btn " style={{ borderRadius: "15px" }}>
            <button
              style={{
                padding: "0.7rem",
                fontWeight: "700",
              }}
              type="button"
              className="btn fill-dis focusRemove upload-btn mt-4"
            >
              DISCORD
            </button>
          </div>
          <div className="trending-btn " style={{ borderRadius: "15px" }}>
            <button
              style={{
                padding: "0.7rem",
                fontWeight: "700",
              }}
              type="button"
              className="btn fill focusRemove upload-btn mt-4"
            >
              WHITELIST NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
