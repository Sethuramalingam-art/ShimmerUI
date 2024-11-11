import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((n, i) => (
      <div style={{ padding: "10px", border: "2px solid" }}>
        <div
          style={{ height: "100px", width: "100px", background: "whitesmoke" }}
        />
      </div>
    ));
};

export default Shimmer;
