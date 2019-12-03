const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  const secret = core.getInput("secret");
  const inputObject = {
    name: nameToGreet,
    secret: secret
  };
  // console.log(`Hello ${nameToGreet} with secret ${secret}`);
  const consoleOutputJSON = JSON.stringify(inputObject, undefined, 2);
  console.log(consoleOutputJSON);

  const time = new Date().toTimeString();
  const outputJSON = JSON.stringify({ time: time });
  core.setOutput("output", outputJSON);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
