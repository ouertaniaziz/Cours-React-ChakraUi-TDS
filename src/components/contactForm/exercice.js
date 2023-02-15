import { useState } from "react";

const Exrcice = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <h1>My favorite color is {color} </h1>
      <button onClick={() => setColor("Red")}>red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("green")}>green</button>
    </>
  );
};

export default Exrcice;
