import React from "react";
import useToggle from "./customHook";

function First() {
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            <button onClick={toggle}>
                {isToggled ? "ON" : "OFF"}
            </button>
            <p>The toggle is {isToggled ? "ON" : "OFF"}</p>
        </div>
    );
}

export default First;


