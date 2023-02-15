import React from "react";
import "./Footer.css";

const Footer = () => {
  let color = "aziz";
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => (color = "aaaa")}>
        Blue
      </button>
      <button type="button" onClick={() => (color = "bbbb")}>
        Red
      </button>
      <button type="button" onClick={() => (color = "fffff")}>
        Pink
      </button>
      <button type="button" onClick={() => (color = "zzzzz")}>
        Green
      </button>
    </>
  );
};

export default Footer;
/*
const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>*/
