import React, { useEffect } from "react";

export default function KeyboardLogger() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(`Key ${event.key} was pressed`);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div>Press a key to log it</div>;
}
