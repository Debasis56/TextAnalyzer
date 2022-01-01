import React, { useState } from "react";

function TextForm(props) {
  let dividerState = "";
  var OUT = 0;
  var IN = 1;
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text has been set to Uppercase.", "secondary", "SUCCESS");
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
   
    setText(newText);
    props.showAlert(" Text has been set to Lowercase.", "primary", "SUCCESS");
  };
  const handleTrimClick = () => {
    console.log("Text is trimmed");
    let newText = text.trim();
    setText(newText);
    props.showAlert(" Extra spaces has been trimmed.", "success", "SUCCESS");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    let newFine = "";
    letMake(newFine);

    props.showAlert(" Your text area has been cleared.", "warning", "SUCCESS");
  };
  const handleRegexClick = () => {
    let itri = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );

    console.log(itri);
    itri.forEach(myFunction);
   
   try{
    letMake(dividerState);
    props.showAlert(" All emails have been listed successfully.", "info", "SUCCESS");
   }
   catch(err)
   {
       letMake(err.message);
       props.showAlert(" Please enter some mail address. ", "danger", "FAILURE");
   }
    
  };
  function countWords(str)
  {
    var state = OUT;
        var wc = 0; // word count
        var i = 0;
         
        // Scan all characters one
        // by one
        while (i < str.length)
        {
         
            // If next character is a separator,
            // set the state as OUT
            if (str[i] === ' ' || str[i] === '\n'||
                                  str[i] === '\t')
                state = OUT;
                 
     
            // If next character is not a word
            // separator and state is OUT, then
            // set the state as IN and increment
            // word count
            else if (state === OUT)
            {
                state = IN;
                ++wc;
            }
     
            // Move to next character
            ++i;
        }
         
        return wc;
    }
  
  function myFunction(item) {
    dividerState += item + "\n";
    //console.log(dividerState);
  }
  const handleClick = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copied Successfully ", "warning", "ALERT");
  };

  const [text, setText] = useState("Enter text here");

  const [make, letMake] = useState("Your emails will be displayed here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className='mb-4'>{props.title}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#36454f",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleClick}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTrimClick}>
          Trim Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRegexClick}>
          Extract Email
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <textarea
          className="form-control my-3"
          value={make}
          readOnly={true}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#36454f",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="exampleFormControlTextarea2"
          rows="3"
        ></textarea>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h4>Your Text Summary is here :</h4>
        <p>
          {/* <b>{countWords(text)}</b> words, <b>{text.length}</b>{" "}
          characters. */}
         <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> min read.
        </p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Nothing is there to preview"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
