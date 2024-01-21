/**
(a) What gets logged to the console when the user clicks on “Button 4” and why?

(b) Provide one or more alternate implementations that will work as expected.
Ans 1 => Immediately invoke the function and pass i
Ans 2 => IIFE, pass i and return the function
Ans 3 => Use let so on click of button0 0 is printed and so on (Cz let creates a blocked scoped variable i.e with every iteration new variable is created in memory location)
Ans 5 => Use forEach loop (Not sure why this works)
*/

// for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', 
//     (function(){
//         console.log(i)
//     })(i))
//     document.body.appendChild(btn);
//   }

//   for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', 
//     (function(i){
//         return function(){console.log(i)}
//     })(i))
//     document.body.appendChild(btn);
//   }

// for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', 
//     function(){
//         console.log(i)
//     });
//     document.body.appendChild(btn);
//   }

['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function() { console.log(i); });
    document.body.appendChild(btn);
  });