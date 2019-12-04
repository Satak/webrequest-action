const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function webhookCall(webhookId, payload, username, password) {
  const url = `https://webhook.site/${webhookId}`;
  const auth = username && password ? { username, password } : null;
  const config = {
    auth
  };
  try {
    const response = await axios.post(url, payload, config);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  try {
    // inputs from action
    const webhookId = core.getInput('webhook-id');
    const payload = JSON.parse(core.getInput('payload'));
    const username = core.getInput('username');
    const password = core.getInput('password');

    // current time
    const time = new Date().toTimeString();

    // http POST request to external API
    const statusCode = await webhookCall(webhookId, payload, username, password);

    const outputObject = {
      webhookId: webhookId,
      payload: payload,
      time: time,
      statusCode: statusCode
    };

    const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    console.log(consoleOutputJSON);

    const outputJSON = JSON.stringify(outputObject);
    core.setOutput('output', outputJSON);

    // Get the JSON webhook payload for the event that triggered the workflow
    // const githubContext = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`githubContext: ${githubContext}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
