import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState('');

    // function to write smthng in text raea
    const handlOnchange = (event) => {
        setText(event.target.value);
    }

    // function to convert the text into upper case
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    // function to convert the text into lower case
    const handleDpclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    // function to clear the text area
    const handleClearclick = () => {
        let newText = ('');
        setText(newText);
        props.showAlert("Text area is cleared!", "danger");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text is copied!", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("Extra spaces are removed!", "success");
    }

    let handleCamelCase = ()=>{
            let newText = text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
            setText(newText);
            props.showAlert("Converted to Camel case!", "success");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    return (
        <>
            <div className='container'>
                <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? '#411d7b': 'white', color: props.mode=== 'dark'?'white': 'black'}} id="box" value={text} onChange={handlOnchange} rows="6"></textarea>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleUpclick}>convert to uppercase</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleDpclick}>convert to lowercase</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleClearclick}>Clear the text</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleCopy}>Copy the text</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={handleCamelCase}>Convert to titleCase</button>
                    <button disabled={text.length===0} className='btn btn-primary mt-2 mx-1' onClick={speak} id="toggle">listen</button>
                </div>
            </div>

            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s/).filter((ele)=>{return ele.length!==0}).length} minutes to read</p>
                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
