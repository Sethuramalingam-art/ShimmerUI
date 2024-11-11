import React, { useEffect, useState } from "react";
import Meme from "./Meme";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const resData = await data.json();
    setMemes(resData.memes);
    console.log(memes);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => {
          return (
            <>
              <div key={i}>
                <Meme key={i} data={meme} />
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default Body;
