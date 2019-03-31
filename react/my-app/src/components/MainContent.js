import React from "react"

function MainComponent(){
    return(
        <main>
            <h2>To do:</h2>
            <ul id="to-do-list">
                <li><input type="checkbox"/> Eat breakfast</li>
                <li><input type="checkbox"/> Make the bed</li>
                <li><input type="checkbox"/> Conquer the world</li>
            </ul>
        </main>
    )
}

export default MainComponent