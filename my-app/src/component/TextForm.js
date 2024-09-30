import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lower was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className='container'>
            <h2><it>{props.heading}</it></h2>
            <div className="mb-3" columns="10">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    id="my-box" 
                    rows="8">
                </textarea>
            </div>
            <button type="button" class="btn btn-dark mx-2" onClick={handleUpClick}>UpperCase</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handleLoClick}>LowerCase</button>
        <div className='Container mb-3'columns="10">
            <h2>Your text Summary </h2><br/>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
        </>
    );
}
