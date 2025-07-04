import { useEffect, useState } from "react";
import useCustomPosition from "./useCustomPosition";

function useCustomPointer(defaultCustom = "") {

    const {x, y} = useCustomPosition();
    const [custom, setCustom] = useState(null);
    
    useEffect(() => {
        const handleMouseMove = () => {
            setCustom(defaultCustom);
            document.body.style.cursor = defaultCustom;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = "none"; // Reset cursor when component unmounts
        };
    }, []);

    return (
        <div className="custom-pointer" style={{ position: "absolute", top: y, left:x}}>
            {custom}
        </div>
    );
}

export default useCustomPointer;

