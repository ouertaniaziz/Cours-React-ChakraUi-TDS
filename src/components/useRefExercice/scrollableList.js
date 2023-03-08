import React, { useState, useRef, useEffect } from "react";

export function ScrollableList() {
  const [names, setNames] = useState(["Alice", "Bob", "Charlie", "David"]);
  const listRef = useRef();

  function scrollUp() {
    listRef.current.scrollTop -= 20;
  }

  function scrollDown() {
    listRef.current.scrollTop += 20;
  }
  useEffect(() => {
    console.log(listRef);
  }, [listRef]);

  return (
    <div style={{ height: "100px", overflow: "scroll" }} ref={listRef}>
      <button onClick={scrollDown}>Down</button>

      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <button onClick={scrollUp}>Up</button>
    </div>
  );
}
