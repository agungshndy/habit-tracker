function StatsBar(){

    return (
        <div className="mt-10">
            <h2>StatsBar Section</h2>
            <div className="flex">
                <p>Morning run</p>
                <button className="border">Done Today</button>
            </div>
            <div className="flex">
                <p>Read 20 Pages</p>
                <button className="border">Check In</button>
            </div>
        </div>
    )
}

export default StatsBar