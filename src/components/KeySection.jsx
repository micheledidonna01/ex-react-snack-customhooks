import useKeyPress from "../customHooks/useKeyPress";
import React from "react";
const KeySection = ()=> {
    const isEnterPressed = useKeyPress("Escape");
    console.log("isEnterPressed", isEnterPressed);


    return (
        <div>
            <h1>Tieni premuto {isEnterPressed.keyPressed} per testare il custom hook</h1>
            <p>{isEnterPressed.response ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
        </div>
    );

} 

export default React.memo(KeySection);