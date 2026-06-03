"use client";

import { useEffect, useState, useCallback} from "react"

const SampleHooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count])

    const handleClick = () => {
        console.log("clicked");
    };

    const handleClickWithCallback = useCallback(() => {
        console.log("clicked");
    }, []);

    return (
        <div>   
            <p>Counting {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment up</button>
            <div className="mt-2">

                <button onClick={() => handleClick()} className="bg-blue-500 text-white p-2 rounded-md">not using use callback</button>
                <button onClick={() => handleClick()} className="bg-blue-500 text-white p-2 rounded-md">use callback</button>
            </div>
        </div>
    )
}

export default SampleHooks