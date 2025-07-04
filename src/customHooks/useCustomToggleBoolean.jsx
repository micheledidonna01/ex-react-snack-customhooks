import { useState } from "react";

function useCustomToggleBoolean(initialValue = false){

    const [booleanValue, setBooleanValue] = useState(initialValue);

    const changeBooleanValue = () => {
        setBooleanValue(booleanValue => !booleanValue);
        
    }


    return {booleanValue, changeBooleanValue};
}

export default useCustomToggleBoolean;