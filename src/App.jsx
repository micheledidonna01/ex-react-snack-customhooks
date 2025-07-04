import useCustomToggleBoolean from "./customHooks/useCustomToggleBoolean"

function App() {
  const {booleanValue, changeBooleanValue} = useCustomToggleBoolean("false");
  console.log("booleanValue", booleanValue);
  return (
    <>
      <div>
        <h1>Change Boleann value</h1>
        <p>value: {booleanValue.toString()}</p>
        <button onClick={changeBooleanValue}>Toggle Boolean </button>
      </div>
    </>
  )
}

export default App
