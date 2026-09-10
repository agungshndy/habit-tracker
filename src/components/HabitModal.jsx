import { useState } from "react";

function HabitModal(isModalOpen) {
    const [ isOpen, setIsOpen ] = useState(false);
    
    if (!isOpen) {
        return null;
    }
    
    return (
        <>
        <h2>HabitModal Section</h2>
        </>
    )    
}

export default HabitModal