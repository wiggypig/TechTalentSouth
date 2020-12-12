//Set global variable
/* var myVar;

function youWon(){
 var winner = "Congratulation!! You Won";
     alert(winner);
    }

function myFunction(){
    myVar = setTimeout(alertFunc, 3000);

}

function alertFunc() {

    alert("We did it!");
}

function delayedAlert() {
    timeoutId = window.setTimeout(window.alert, 5000, 'That was really slow about five seconds');
}
 */
/* console.log('1')

setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000)

console.log('3') */

// slide 16
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 

//   async function starwars() {
//       try {
//           const response = await axios.get('https://swapi.dev/api/planets/');
//           console.log(response);
//       } catch (error) {
//           console.log(error);
//       }
//       }
//   }

  // async function sayThings(){
//     return 'hello all'
// }
// sayThings().then((val)=>{
//     console.log('promise',val)
// })
// fetch('https://swapi.dev/api/planets/')
//     .then((res)=>{
//        res.json().then((data)=>{
//            for(let planet of data.results){
//             console.log(planet.name)
//            }
//        })
//     })
//axios.get('https://swapi.dev/api/planets/')
// .then((res)=>{
//     console.log(res)
// })
async function starwars() {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  starwars()
  .then((res)=>console.log(res))

/*   
Write an asynchronous function and call it with async/await
Write function called getRandomNumber that returns a promise
In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
Invoke your async function
 */

async function getRandomNumber() {
    try {
        let x = Math.random();
      const response = await axios.get('https://swapi.dev/api/planets/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  starwars()
  .then((res)=>console.log(res))


