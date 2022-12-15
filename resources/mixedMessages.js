const alphaArray = [[a1], [a2], [a3], [a4]];
const betaArray = [[b1], [b2], [b3]];
const carrotArray = [[c1], [c2], [c3], [c4], [c5], [c6]];

function getRandomMessage() {
  //get random element from each of 3 arrays
  const a = Math.floor(Math.random() * alphaArray.length);
  const b = Math.floor(Math.random() * betaArray.length);
  const c = Math.floor(Math.random() * carrotArray.length);
  const part1 = alphaArray[a];
  const part2 = betaArray[b];
  const part3 = carrotArray[c];
  //combine 3 message parts into message
  const message = `${part1} ${part2}. ${part3}.`;
  //print message to screen
  document.getElementById("message").innerHTML = message;
  console.log("did the message make sense?");
}
