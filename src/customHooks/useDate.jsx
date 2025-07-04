import { useState, useEffect } from 'react';

function useDate(){
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date());
        }, 1000);
    }, [date]);

    return date;
}

export default useDate;