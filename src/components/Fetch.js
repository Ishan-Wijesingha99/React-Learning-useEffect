
import React from "react";



export const Fetch = function() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    const addCount = function() {
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(() => {

        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={addCount}>Get Next Character</button>
            <p>{JSON.stringify(starWarsData, null, 2)}</p>
        </div>
    )
}