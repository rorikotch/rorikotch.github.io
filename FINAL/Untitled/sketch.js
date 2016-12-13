var myRec = new p5.SpeechRec();
var pTag = document.createElement("p");
var myP;
var allMessage = "";
var foo; 


// sets myRec to listen continuously
myRec.continuous = true;
// sets interimResults to give answers faster
myRec.interimResults = true;

function setup() {
    foo = new p5.Speech();
  foo.speak("Speak now");
  myRec.onResult = showResult;
  myRec.start();
    myP = createP('...Loading');
    myP.id("result");
}


function showResult() {
   
  if(myRec.resultValue==true) {

    // store the spoken text string in a variable
    //var capturedSpeech = document.createTextNode();

    // create a new set of p tags (<p></p>)
    // then add the text to our p tags.
   
    //look at result
      
      //console.log(myRec.resultString.split(" "));
      
      //the easiest way to try to loop through it would be for word in ..
      
      var currentResult = myRec.resultString.split(" ");
      for (var word in currentResult) {
         // console.log(currentResult[word]);
        
      if (currentResult[word] == "hello") {
           foo = new p5.Speech();
          foo.speak("Hi there");
      }
      }
    
    
      
      
    //pTag.innerHTML = myRec.resultString;
      allMessage = allMessage + " " + myRec.resultString;
      myP.html(allMessage);
      
    

    // <p>TriStar is a scary computer.</p>

    // Now find where you want to add the new p.
    // Get the element with the id "transcript"
    // Then add the p tag created above.

    //var transcript = document.getElementById("transcript");
    //transcript.appendChild(pTag);
  }

 console.log(myRec);
 console.log(myRec.resultString);
}

function draw {
    xPos++;
  ellipse(xPos, height/2, 20, 20);
  
  if(xPos > width){
    xPos = 0;
  }
}

function mousePressed(){
  counter++;
  canvasImage = "images/myCanvas" + counter + ".jpg";
  save(cnv, canvasImage);      // Saves canvas as an image
  console.log("Saved");
}
}

// If you want it to stop, put in Dev Tools console:
// myRec.stop