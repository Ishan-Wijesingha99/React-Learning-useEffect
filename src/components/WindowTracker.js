
import React from "react";



export const WindowTracker = function() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const windowResizeFunction = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', windowResizeFunction)

        // when we have to return something from useEffect(), we usually return another callback function, this is called a cleanup function
        // whenever a component stops being rendered in the HTML, this function is executed automatically
        // no other code in the component will be run when a component STOPS being rendered, only what's in these cleanup functions
        // this is where you are suppose to cleanup after yourself, for instance, if you add an event listener to something inside a component, when that component stops being rendered, that event listener is still active, the cleanup function is where you remove that event listener

        // this is the main reason we can't use async-await for the callback function of useEffect(), because when we declare a function an async function, what is returned is a promise, and therefore you can't return a cleanup function
        // an easy way around this is to create a function inside useEffect's callback function, and make that an async function, then call it, then return a cleanup function
        return () => {
            // to remove event listener, it needs to have the exact same arguments as the addEventListener
            window.removeEventListener('resize', windowResizeFunction)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}px</h1>
    )
}