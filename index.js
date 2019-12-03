const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function webhookCall(webhookId, payload) {
  const url = `https://webhook.site/${webhookId}`;
  try {
    const response = await axios.post(url, payload);
    console.log('Webhook statuscode:', response.status);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const secret = core.getInput('secret');
  const webhookId = core.getInput('webhook-id');

  const inputObject = {
    name: nameToGreet,
    secret: secret,
    webhookId: webhookId
  };

  const payload = {
    name: nameToGreet
  };
  // console.log(`Hello ${nameToGreet} with secret ${secret}`);
  const consoleOutputJSON = JSON.stringify(inputObject, undefined, 2);
  console.log(consoleOutputJSON);

  // http request to external API
  const statusCode = webhookCall(webhookId, payload);
  const time = new Date().toTimeString();
  const outputObject = {
    time: time,
    name: nameToGreet,
    statusCode: statusCode
  };
  const outputJSON = JSON.stringify(outputObject);
  core.setOutput('output', outputJSON);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
