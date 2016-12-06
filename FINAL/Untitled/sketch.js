var myRec = new p5.SpeechRec();

// sets myRec to listen continuously
myRec.continuous = true;
// sets interimResults to give answers faster
myRec.interimResults = true;

function setup() {
  var foo = new p5.Speech();
  foo.speak("Yo");
  myRec.onResult = showResult;
  myRec.start();
}


function showResult() {
  if(myRec.resultValue==true) {

    // store the spoken text string in a variable
    var capturedSpeech = document.createTextNode(myRec.resultString);

    // create a new set of p tags (<p></p>)
    // then add the text to our p tags.
    var pTag = document.createElement("p");
    pTag.appendChild(capturedSpeech);

    // <p>TriStar is a scary computer.</p>

    // Now find where you want to add the new p.
    // Get the element with the id "transcript"
    // Then add the p tag created above.

    var transcript = document.getElementById("transcript");
    //transcript.appendChild(pTag);
  }

  console.log(myRec)
  console.log(myRec.resultString)
}


// If you want it to stop, put in Dev Tools console:
// myRec.stop
