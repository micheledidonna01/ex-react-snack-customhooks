import { useEffect, useState } from "react";

function useKeyPress(initialValue = "") {

    const [keyPressed, setKeyPressed] = useState(initialValue);
    const [response, setResponse] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // if(keyPressed.current === event.key.toString()) return true;
            // return false;
            if(keyPressed === event.key.toString()) {
                setResponse(true);
            }else{
                setResponse(false);
            }

        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])

    return {keyPressed, response};






}

export default useKeyPress;