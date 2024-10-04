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
    const handleclearClick = ()=>{
        console.log("clear clicked: " + text);
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("my-box");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handlespace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
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
            <button type="button" class="btn btn-dark mx-2" onClick={handleclearClick}>Clear</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handlecopy}>Copy</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handlespace}>Remove Extra Spaces</button>
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
