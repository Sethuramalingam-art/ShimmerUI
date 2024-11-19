import React, { useEffect, useState } from "react";
import Meme from "./Meme";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [shimmerLoader, setShimmerLoader] = useState(false);
  useEffect(() => {
    fetchMeme();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  };

  const fetchMeme = async () => {
    setShimmerLoader(true);
    const data = await fetch("https://meme-api.com/gimme/10");
    const resData = await data.json();
    setShimmerLoader(false);
    setMemes((memes) => [...memes, ...resData.memes]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        overflowY: "scroll",
        flexDirection: "column",
      }}
    >
      {memes.map((meme, i) => {
        return (
          <>
            <div key={i}>
              <Meme key={i} data={meme} />
            </div>
          </>
        );
      })}{" "}
      {shimmerLoader && <Shimmer />}
    </div>
  );
};

export default Body;
