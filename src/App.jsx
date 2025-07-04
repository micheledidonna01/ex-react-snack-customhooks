
import ToggleSection from "./components/ToggleSection";
import DataSection from "./components/DataSection";

import useCustomPointer from "./customHooks/useCustomPointer";

import KeySection from "./components/KeySection";
import "./App.css";

function App() {



  const customPointer = useCustomPointer("😶‍🌫️");

  // const isEnterPressed = useKeyPress("Enter");
  // console.log("isEnterPressed", isEnterPressed);


  return (
    <>
      <ToggleSection />
      <DataSection />


      <div>
        <h1>Hooks che cambia il cursore del mouse</h1>
        {customPointer}
      </div>

      <KeySection />
    </>
  )
}

export default App
