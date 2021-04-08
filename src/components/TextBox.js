import React from 'react';

function TextBox() {
    return (
        <div className="textbox-and-play-container">
            <input className="textbox" type="text" placeholder="textbox"></input>
            {/* button will iterate through textbox to play sequence */}
            <button class='button play'>PLAY</button>
        </div>

    )
}

export default TextBox;