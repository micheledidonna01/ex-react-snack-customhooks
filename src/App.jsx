
import useCustomToggleBoolean from "./customHooks/useCustomToggleBoolean"
import useDate from "./customHooks/useDate";
// import useCustomPosition from "./customHooks/useCustomPosition";
import useCustomPointer from "./customHooks/useCustomPointer";
import "./App.css";

function App() {
  const {booleanValue, changeBooleanValue} = useCustomToggleBoolean("false");
  console.log("booleanValue", booleanValue);

  const date = useDate();
  // console.log("date", date);


  const customPointer = useCustomPointer("😇");


  return (
    <>
      <div>
        <h1>Change Boleann value</h1>
        <p>value: {booleanValue.toString()}</p>
        <button onClick={changeBooleanValue}>Toggle Boolean </button>
      </div>


      <div>
        <h1>Date every second</h1>
        <p>{date.toLocaleString()}</p>
      </div>


      <div>
        <h1>Hooks che cambia il cursore del mouse</h1>
        {customPointer}
  
      </div>

      
    </>
  )
}

export default App
