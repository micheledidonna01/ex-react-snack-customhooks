import { useState, useCallback } from "react";

function useCustomToggleBoolean(initialValue = false){

    const [booleanValue, setBooleanValue] = useState(initialValue);

    const changeBooleanValue = useCallback(()=>{

            setBooleanValue(booleanValue => !booleanValue);
            
    }, []);


    return {booleanValue, changeBooleanValue};
}

export default useCustomToggleBoolean;