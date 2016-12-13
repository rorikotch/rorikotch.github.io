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
      
      
      var currentResult = myRec.resultString;
       
      if (currentResult[word] == "hello") {
          foo.speak("Hi there");
      }
      
      if (currentResult == "How are you"){
        foo.speak("I am well, how are you"); 
      } else {
        
      for (var word in currentResult.split(" ")) {
         // console.log(currentResult[word]);
          
    
      } 
      }
    
      //when you are more comfoprtable add text prompts for the user in the setup look at examples from class
      
      
    //pTag.innerHTML = myRec.resultString;
      allMessage = allMessage + " " + myRec.resultString;
      myP.html(allMessage);
      

    //var transcript = document.getElementById("transcript");
    //transcript.appendChild(pTag);
  }

 console.log(myRec);
 console.log(myRec.resultString);
}


// If you want it to stop, put in Dev Tools console:
// myRec.stop
