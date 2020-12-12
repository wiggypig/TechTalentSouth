// Random Number using asynchronous function, await, and promise
async function displayRandomNumber() {
    const randNumber = await makeRandomNumber();
    const randNumberLog = `Random Number: ${randNumber}`;
    console.log(randNumberLog);
}

function makeRandomNumber() {
    return new Promise(x =>
      setTimeout(() => x(Math.floor(Math.random() * 100)), 500));
}
displayRandomNumber();

// Random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  let x = 0;
  x = getRandomInt(1, 101);

  console.log("The random integer x is ", x);

