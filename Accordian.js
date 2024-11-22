import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState([0, 2]);
  const data = [
    {
      userId: 1,
      it: 1,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 2,
      it: 2,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 3,
      it: 3,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 4,
      it: 4,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
  ];
  return (
    <>
      <span>Accordian</span>
      {data.map((acc, index) => {
        return (
          <AccordianItem
            key={acc.userId}
            title={acc.title}
            body={acc.body}
            isOpen={isOpen.includes(index)}
            setIsOpen={() => {
              if (isOpen.includes(index)) {
                isOpen.splice(isOpen.indexOf(index), 1);
                setIsOpen([...isOpen]);
              } else {
                setIsOpen([...isOpen, index]);
              }
            }}
          />
        );
      })}
    </>
  );
};

export default Accordian;
