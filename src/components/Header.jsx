function Header({onClick : onAddClick}) {

    return (
        <div className="grid-cols-2 flex gap-4 mb-5 justify-between">
            <div className="flex ml-7">
                <h1>HabitFlow</h1>
            </div>  
            <div className="items-center text-center justify-items-center flex mr-7">
                <button className="text-sm border rounded-md px-3 py-1 hover:cursor-pointer transition-colors hover:opacity-75"
                onClick={onAddClick}
                >
                    + Add Habit
                </button>
            </div>
        </div>
    )
}
export default Header