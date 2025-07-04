import { useEffect, useState } from "react";

function useCustomPosition(initialPosition = { x: 0, y: 0 }) {
    const [position, setPosition] = useState(initialPosition);
    // const [pointer, setPointer] = useState({ x: 0, y: 0 , cursor: initialPointer });

    useEffect(() => {
        const positionFunction = (event) => {
            setPosition({ x: event.clientX, y: event.clientY })
            // setPointer({ x: position.x, y: position.y, cursor: initialPointer });
        }
        window.addEventListener("mousemove", positionFunction);
        return () => {
            window.removeEventListener("mousemove", positionFunction);
        };
    }, []);

    return position;

}




export default useCustomPosition;