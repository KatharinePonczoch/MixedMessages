const alphaArray = [
  ["The most meaningful way to succeed is to help others to succeed."],
  [
    "Focus attention and energy on making a difference in the lives of others, and success might follow as a by-product.",
  ],
  [
    "A hallmark of wisdom is knowing when it's time to abandon some of your most treasured tools - and some of the most cherished parts of your identity.",
  ],
  ["Changing your mind doesn't make you a flip-flopper or a hypocrite."],
  [
    "Focusing on results might be good for short-term performance, but it can be an obstacle to long-term learning.",
  ],
  [
    "I think of productivity as using your time to accomplish things of value to you and others.",
  ],
  ["It's ironic that when you go through a tragedy, you appreciate more."],
  [
    "If you want your children to bring original ideas into the world, you need to let them pursue their passions, not yours.",
  ],
  ["Dissenting for the sake of dissenting is not useful..."],
  ["Procrastinate strategically...it can be a virtue for creativity."],
  [
    "Authenticity means erasing the gap between what you firmly believe inside and what you reveal to the outside world.",
  ],
  ["Passionate people don't wear their passion on their sleeves."],
  [
    "We listen to views that make us feel good, instead of ideas that make us think hard.",
  ],
  [
    "We live in a rapidly changing world, where we need to spend as much time rethinking as we do thinking.",
  ],
  [
    "Once we hear the story and accept it as true, we rarely bother to question it.",
  ],
  ["It takes confident humility to admit that we're a work in progress."],
];
const betaArray = [
  ["Don't criticize yourself while you're creating."],
  ,
  ["Everyone knows more than you about something."],
  ["Listening well is more than a matter of talking less."],
  ["Your antidote to burnout is not necessarily less work."],
  ["Joy can wax and wane, but meaning is more likely to last."],
  ["Conformity is dangerous."],
  ["Stop asking kids what they want to be when they grow up."],
  [
    "But when its authentic, it stimulates thought; it clarifies and emboldens.",
  ],
  ["Argue like you're right and listen like you're wrong."],
  ["Reconsidering something we believe deeply can threaten our identities."],
  ["No one wants to hear everything that's in your head."],
  ["Originality is not a fixed trait."],
  ["Passions are developed, not just discovered."],
];
const carrotArray = [
  ["It's never too late to become an original."],
  ["It means you were open to learning. "],
  [
    "You realize how fragile life is and that there are so many things to still be thankful for.",
  ],
  ["That is the real accolade."],
  ["But I measure success in what it has done for the people around me."],
  [
    "You need to find the people who genuinely hold different views and invite them into the conversation.",
  ],
  ["Genuine dissenters challenge people to doubt themselves."],
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
  ["They just want you to live up to what comes out of your mouth."],
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
