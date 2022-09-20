
import React from "react";
import { WindowTracker } from "./WindowTracker";



export const App = function() {
    const [show, setShow] = React.useState(true)

    const toggleShow = function() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div>
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>

            {show && <WindowTracker />}
        </div>
    )
}