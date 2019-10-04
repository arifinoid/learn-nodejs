const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node js? "
];

const answerEvent = collectAnswers(questions);

answerEvent.on("answer", answer => console.log(`question answered: ${answer}`));

answerEvent.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});

answerEvent.on("complete", () => process.exit());
