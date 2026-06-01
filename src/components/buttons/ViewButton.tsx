"use client";

const ViewUserButton = () => {
    const handleClick = () => { alert("Coba Testing Use Client") }
    return (
        <div>
            <button 
                type="button"
                className="rounded-full bg-indigo-600 px-5 py-2 text-sm leading-5 font-semibold text-white hover:not-focus:bg-indigo-700 focus:outline focus:outline-violet-300 active:bg-violet-700"  
                onClick={handleClick}>Click The Button</button>
        </div>
    ) 
}

export default ViewUserButton