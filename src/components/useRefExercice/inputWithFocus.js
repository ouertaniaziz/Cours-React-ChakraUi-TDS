import React, { useRef, useEffect } from "react";

export function InputWithFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
