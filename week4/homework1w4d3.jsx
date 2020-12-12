// Random Number
async function printRandomNumber() {
    const randNumber = await getRandomNumber();
  const randNumberLog = `Random Number: ${randNumber}`;
  console.log(randNumberLog);
//   htmlLog(randNumberLog);
}

function getRandomNumber() {
    return new Promise(x =>
      setTimeout(() => x(Math.floor(Math.random() * 1000)), 500));
}

