import React, { useState } from 'react'

const State = () => {

    const [time, setTime] = useState(0);

    // time increment function
    const handleIncrement = () => {
        setTime(time + 1);
    }

    return (
        <div>
            <h2>Time:{time}seconds</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default State
