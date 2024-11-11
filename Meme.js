import React from "react";

const Meme = (data) => {
  console.log(data);
  const { url, title, author } = data.data;
  console.log(url);
  return (
    <div style={{ padding: "10px", border: "2px solid" }}>
      <img
        alt="memeCard"
        src={url}
        style={{ height: "100px", width: "100px" }}
      />
      <p>{title}</p>
    </div>
  );
};

export default Meme;
