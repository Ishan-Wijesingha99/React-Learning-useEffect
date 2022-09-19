
import React from "react";



export const App = function() {
    const [count, setCount] = React.useState(0)

    console.log('Component rendered')

    const addCount = function() {
        setCount(prevCount => prevCount + 1)
    }



    // useEffect takes in two arguments, the first is required, the second is optional but almost always is included
    // first argument is a callback function
    // the code inside this callback function is only run after the JSX of this component is rendered on the page

    // without the second argument, useEffect() code will rerun every time the functional component is rerendered
    // second argument is a dependencies array
    // if the dependencies array is an empty array [] , this tells react we want the code inside useEffect() to be run once when the component first renders, but that's it
    // usually, you put state variables in the dependencies array
    // what React does is, everytime state changes, the entire component is rerendered, when that happens, if the dependencies array has a state variable in it, then the dependencies array has also changed. It might have been [1 , 'ishanwijes@gmail.com', 3] and now its [1, 'ishanwijes@gmail.com', 5]
    // React will compare the original dependencies array to the new dependencies array, if they are different, the code inside useEffect() will be rerun
    React.useEffect(() => {

        // any code to do with fetch calls, we put inside useEffect(), any code that is outside of React's scope, we put in useEffect()
        console.log('Effect function ran')

    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={addCount}>Add</button>
        </div>
    )
}