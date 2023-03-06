import React, { useEffect, useState } from "react";

const ChildExercice = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("bye");
    };
  }, []);
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);
  useEffect(() => {
    document.title = name;
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <>
      <input
        type="text"
        style={{ border: " solid 2px red" }}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((age) => age + 1)}>+ </button>
      {"" + age + ""}
      <button onClick={() => setAge((age) => age - 1)}>-</button>
      <br />
      My name is {name} and I am {age} years old.
      <br />
      <br />
    </>
  );
};

export default ChildExercice;
