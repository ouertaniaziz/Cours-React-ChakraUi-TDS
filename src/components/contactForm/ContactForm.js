import React, { useState } from "react";
/*
const ContactForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
*/
const ContactForm = () => {
  let name = "aziz";
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" onChange={(e) => (name = e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
};
export default ContactForm;
