const alphaArray = [
  ["The most meaningful way to succeed is"],
  [
    "Focus attention and energy on making a difference in the lives of others, and",
  ],
  [
    "A hallmark of wisdom is knowing when it's time to abandon some of your most treasured tools - and",
  ],
  ["Changing your mind doesn't make"],
  ["Focusing on results might be good for short-term performance, but"],
  ["I think of productivity as using your time to"],
  ["It's ironic that when you go through a tragedy, you"],
  [
    "If you want your children to bring original ideas into the world, you need to",
  ],
  ["Procrastination is a vice when it comes to productivity, but"],
  ["Procrastinate strategically..."],
  ["Authenticity means "],
  ["Passionate people don't"],
  ["We listen to views that make us feel good, instead of ideas"],
  ["We live in a rapidly changing world, where"],
  ["Once we hear the story and"],
  ["It takes confident humility to"],
];
const betaArray = [
  ["to help others to succeed."],
  ["success might follow as a by-product."],
  ["some of the most cherished parts of your identity."],
  ["you a flip-flopper or a hypocrite."],
  ["it can be an obstacle to long-term learning."],
  ["accomplish things of value to you and others."],
  ["appreciate more."],
  ["let them pursue their passions, not yours."],
  ["it can be a virtue for creativity."],
  [
    "erasing the gap between what you firmly believe inside and what you reveal to the outside world.",
  ],
  ["that make us think hard."],
  ["we need to spend as much time rethinking as we do thinking."],
  ["accept it as true, we rarely bother to question it."],
  ["admit that we're a work in progress."],
];
const carrotArray = [
  ["It means you were open to learning. "],
  [
    "You realize how fragile life is and that there are so many things to still be thankful for.",
  ],
  ["That is the real accolade."],
  ["But I measure success in what it has done for the people around me."],
  [
    "You need to find the people who genuinely hold different views and invite them into the conversation.",
  ],
  ["Argue like you're right and listen like you're wrong."],
  ["Passions are developed, not discovered."],
  ["Creativity may be hard to nurture, but it's easy to thwart."],
  [
    "Having a sense of security in one realm gives us the freedom to be original in another.",
  ],
  [
    "Procrastination may be the enemy of productivity but it can be a valuable resource for creativity.",
  ],
  ["They have it in their hearts."],
  ["Arrogance leaves us blind to our weaknesses."],
  ["Now I'm more interested in finding out what I don't know."],
  [
    "People are remarkably open to criticism when they believe it's intended to help them.",
  ],
  ["It's really important to have a good reputation."],
  ["We favor the comfort of conviction over the discomfort of doubt."],
  ["Reconsidering something we believe deeply can threaten our identities."],
  [
    "After all, the purpose of learning isn't to affirm our beliefs; it's to evolve our beliefs.",
  ],
];

function getRandomMessage() {
  function makeVisible() {
    document.getElementById("hidden").style.visibility = "inherit";
  }
  makeVisible();
  //get random element from each of 3 arrays
  const a = Math.floor(Math.random() * alphaArray.length);
  const b = Math.floor(Math.random() * betaArray.length);
  const c = Math.floor(Math.random() * carrotArray.length);
  const part1 = alphaArray[a];
  const part2 = betaArray[b];
  const part3 = carrotArray[c];
  //combine 3 message parts into message
  const message = `"${part1} ${part2} ${part3}"`;
  //print message to screen
  document.getElementById("message").innerHTML = message;
  document.getElementById("author").innerHTML = "- Adam Grant";
  console.log("did the message make sense?");
}
