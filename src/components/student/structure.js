import { useState } from "react";
const Structure = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>nom</td>
            <td>age</td>
            <td>classe</td>
            <td>moyenne</td>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </>
  );
};
export function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setIsOpen(!isOpen)}>{props.title}</h2>
      {isOpen && props.children}
    </div>
  );
}


export default Structure;
