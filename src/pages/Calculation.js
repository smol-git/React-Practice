import { useMemo, useState } from "react";

export default function Cal(){
    const[count, setCount]= useState(0);
    const calculation = () => {
        return count * 2;
    }

    const result = useMemo(() => calculation(count), [count] )


    return(
        <>
            <p>Count:{count}</p>
            <p>Result:{result}</p>
            <button type="button" onClick={() => setCount(count+1)}>
                    Count
                </button>
        </>
    )
}