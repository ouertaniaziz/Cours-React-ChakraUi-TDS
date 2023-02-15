import React from "react";

const ArrayDisplay = () => {
  const array = ["d", "e", "f"];

  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ArrayDisplay;
