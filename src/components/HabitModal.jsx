import { useState } from "react";

function HabitModal({ submitName, isOpen, onClick : onSubmitClick }) {

    const [ habitName, setHabitName ] = useState("");
    
    if (!isOpen) {
        return null;
    }


    return (
        <>
        <h2>HabitModal Section</h2>
        <h3>HabitModal should hidden first before Add Habit button is clicked!</h3>
        <input className="border border-white rounded-md" type="text" 
        value={habitName} 
        onChange={(e)=> setHabitName(e.target.value)}/>Type anything here
        <button className="text-sm border rounded-md w-auto px-3 py-1 hover:cursor-pointer transition-colors hover:opacity-75"
        onClick={() => {
            submitName(habitName)
            setHabitName("");
            onSubmitClick();
        }}
        >Submit</button>
        </>
    )    
}

export default HabitModal