// var list = document.querySelector("ul");


// document.querySelector("#title").textContent = info[event.target.id].color;
//         document.querySelector("#saying").textContent = info[event.target.id].string;
//         document.querySelector("#swatch").setAttribute("style", "background: rgb(" + info[event.target.id].rgb.join(",") + ");");


// cheddarsvg = document.getElementById("cheddar")
// cheddarsvg.addEventListener("click",function(){
//   console.log(cheeses["cheddar"].wines);
// })
//
//
// classicbluesvg = document.getElementById("classicblue")
// classicbluesvg.addEventListener("click",function(){
//   console.log(cheeses["classicblue"].wines)
// })
//
//
// epoissesdesvg = document.getElementById("epoissesde")
// epoissesdesvg.addEventListener("click",function(){
//   console.log(cheeses["epoissesde"].wines)
// })
//
//
//
// gruyeresvg = document.getElementById("gruyere")
// gruyeresvg.addEventListener("click",function(){
//   console.log(cheeses["gruyere"].wines)
// })
//
// manchegosvg = document.getElementById("manchego")
// manchegosvg.addEventListener("click",function(){
//   console.log(cheeses["manchego"].wines)
// })
//
// parmigianoreggianoSvg = document.getElementById("parmigianoreggiano")
// parmigianoreggianoSvg.addEventListener("click",function(){
//   console.log(cheeses["parmigianoreggiano"].wines)
// })


var list = document.querySelector("#container");

list.addEventListener("click", function(event) {
        console.dir(event.target.parentElement.parentElement.parentElement.id);
        //
        document.querySelector("#cheesename").textContent = "This cheese pairs best with: " + cheeses[event.target.parentElement.parentElement.parentElement.id].wines;
        // cheeses[event.target.id].wines.join(",") + " );";
   });


// parmigianoreggianoSvg.click(function(){
//   if (event.target == parmigianoreggianoSvg)
//     modal.style.display(cheeses["parmigianoreggiano"].wines);
// })

// parmigianoreggianoSvg.addEventListener("click" , function(){
//   window.alert(cheeses["parmigianoreggiano"].wines);
// });




// function (cheeses.on(click) === true){
// window.alert(getElementById.wines);
// }

// window.alert(cheeses["manchego"].wines);
// window.alert(cheeses["gruyere"].wines);
// window.alert(cheeses["parmigianoreggiano"].wines);
// window.alert(cheeses["epoissesde"].wines);
// window.alert(cheeses["cheddar"].wines);





// if (confirm (cheddarsvg === true)
  // alert("cheeses["cheddar"].wines");




/* parmigianoreggianoSvg = document.getElementById(cheeses.["parmigianoreggiano".name]).style.display = "none";
*/



/*add the names on hover*/



/*cheeses["cheddar"].wines*/
