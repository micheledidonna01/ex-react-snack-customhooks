import React from "react";
import useCustomToggleBoolean from "../customHooks/useCustomToggleBoolean";

function ToggleSection() {
  const { booleanValue, changeBooleanValue } = useCustomToggleBoolean(false);
    console.log("booleanValue", booleanValue);
  return (
    <div>
      <h1>Toggle Section</h1>
      <p>Current Value: {booleanValue.toString()}</p>
      <button onClick={changeBooleanValue}>Toggle Value</button>
    </div>
  );
}
export default React.memo(ToggleSection);