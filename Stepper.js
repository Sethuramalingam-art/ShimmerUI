import React, { useState } from "react";
import "./App.css";

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsLength = list?.length ?? 10;
  const steps = [];

  for (let i = 0; i < stepsLength; i++) {
    steps.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (stepsLength - 1)) * currentStep;

  return (
    <>
      <section className="stepper">
        <div className="stepper-container">
          <div className="steps-wrapper">{steps}</div>
          <div
            className="progress-line"
            style={{ width: `${progressLineWidth}%` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Stepper;
