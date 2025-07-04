
import ToggleSection from "./components/ToggleSection";
import DataSection from "./components/DataSection";
// import useCustomPosition from "./customHooks/useCustomPosition";
import useCustomPointer from "./customHooks/useCustomPointer";
import useKeyPress from "./customHooks/useKeyPress";
import "./App.css";

function App() {
  // const {booleanValue, changeBooleanValue} =  useCustomToggleBoolean("false");
  // console.log("booleanValue", booleanValue);

  // const date = useDate();
  // console.log("date", date);


  const customPointer = useCustomPointer("😶‍🌫️");

  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
    <ToggleSection />
      {/* <div>
        <h1>Change Boleann value</h1>
        <p>value: {booleanValue.toString()}</p>
        <button onClick={changeBooleanValue}>Toggle Boolean </button>
      </div> */}

        <DataSection />
      {/* <div>
        <h1>Date every second</h1>
        <p>{date.toLocaleString()}</p>
      </div> */}


      <div>
        <h1>Hooks che cambia il cursore del mouse</h1>
        {customPointer}
  
      </div>

      <div>
        <h1>Tieni premuto "Enter" per testare il custom hook</h1>
        <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </>
  )
}

export default App
