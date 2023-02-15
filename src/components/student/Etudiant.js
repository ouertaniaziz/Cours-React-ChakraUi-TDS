const Etudiant = (props) => {
  const moyenne = (tableau) => {
    let somme = 0;
    for (const element of tableau) {
      somme += element;
    }
    return somme / tableau.length;
  };
  return (
    <>
      {props.data.map((element) => (
        <tr key={element.id}>
          <td>{element.nom}</td>
        </tr>
      ))}
    </>
  );
};

export default Etudiant;
