import "./App.css";
import Navbar from "../header/Header";
import Footer from "../footer/Footer";
import ContactForm from "../contactForm/ContactForm";
import ImageCaption from "../image/FirstImage";
import ArrayDisplay from "../array/array";
import Test from "../testComponents/test";
import Etudiant from "../student/Etudiant";
import Structure, { Accordion } from "../student/structure";
import Exrcice from "../contactForm/exercice";
import ChakraCours from "../mercredi/courschakra";
import SocialProfileWithImage from "../mercredi/card";
import DashbordChakra from "../chakraExercice/chakraEssai";
import NavBar from "../chakraExercice/NavBar";
import KeyboardLogger from "../UseEffectCourse/KeyboardLogger";
import { useState } from "react";
import PageTitle from "../UseEffectCourse/PageTitle";
import DataFetcher from "../UseEffectCourse/jsonexercice";
import { ScrollTracker } from "../UseEffectCourse/scrolleexercice";
import { ScrollableList } from "../useRefExercice/scrollableList";
import ChildExercice from "../exercice2_useEffect/Child_exercice";
import TodoList from "../todolist/todolist";
import SignupForm from "../signUpForm/SignUpForm";
import Dashboard from "../signUpForm/SignUpForm";
function App() {
  const t = [3, 2, 5, 8];
  const tab = [
    { id: 1, nom: "aziz", age: 12, classe: "2eme", note: t },
    { id: 2, nom: "bilel", age: 13, classe: "2eme", note: t },
    { id: 3, nom: "houssem", age: 14, classe: "2eme", note: t },
  ];
  const [visisble, setVisible] = useState(true);
  return (
    <>
      {/* <Structure>
        <Etudiant data={tab} />
      </Structure>
      <Accordion title="Titre de l'accordéon">
        <p>Contenu de l'accordéon</p>
      </Accordion>
  <ContactForm />
  <Exrcice />*/}
      {/* <ChakraCours></ChakraCours>
      <SocialProfileWithImage></SocialProfileWithImage>
      <NavBar />
<DashbordChakra />
      <PageTitle />
      {visisble ? (
        <>
          <KeyboardLogger />
        </>
      ) : null}

      */}
      {/*<DataFetcher />
      
       {visisble ? (
        <>
          <ChildExercice />
        </>
      ) : null}
      <button onClick={() => setVisible(!visisble)}>Toggle</button>
            <ScrollableList />
                  <Dashboard />

                  <TodoList />

*/}
      <SignupForm />
    </>
  );
}

export default App;
