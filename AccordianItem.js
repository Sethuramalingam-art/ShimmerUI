import React, { useState } from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
        }}
      >
        <div
          style={{
            padding: "12px",
            background: "grey",
            color: "white",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={setIsOpen}
        >
          {title}
          <span>⬇️</span>
        </div>
        {isOpen && (
          <div
            style={{ padding: "10px", border: "1px solid", fontSize: "14px" }}
          >
            {body}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordianItem;
