var myRec = new p5.SpeechRec();
var pTag = document.createElement("p");
var myP;
var allMessage = "";


// sets myRec to listen continuously
myRec.continuous = true;
// sets interimResults to give answers faster
myRec.interimResults = true;

function setup() {
  var foo = new p5.Speech();
  foo.speak("Hello");
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
          
          //write it to do something here 
          //do a console log first
          //if you want a gif to pop up use the toggle true false example, you aregoing to gave a vasriable to say gif on, then in the draw loop you have if gifOn= true play the gif. Two ways you could do it, play the gif and immediately you set gifOn=false (so it doesnt play over and over) if the gif isn't playing out you might want to either use a timer or count framws. 
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


// If you want it to stop, put in Dev Tools console:
// myRec.stop
