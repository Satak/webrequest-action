const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function webrequest(url, method, payload, username, password) {
  const auth = username && password ? { username, password } : null;
  const config = {
    auth
  };
  try {
    let response = null;
    if (method === 'post') {
      response = await axios.post(url, payload, config);
    } else if (method === 'put') {
      response = await axios.put(url, payload, config);
    } else if (method === 'patch') {
      response = await axios.patch(url, payload, config);
    } else {
      response = await axios.get(url, config);
    }
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  try {
    // inputs from action
    const url = core.getInput('url');
    const methodInput = core.getInput('method');
    const method = methodInput.toLowerCase();
    const payloadInput = core.getInput('payload');
    const payload = payloadInput ? JSON.parse(payloadInput) : null;
    const username = core.getInput('username');
    const password = core.getInput('password');

    // current time
    const time = new Date().toTimeString();

    // http request to external API
    const statusCode = await webrequest(url, method, payload, username, password);

    const outputObject = {
      url,
      method,
      payload,
      time,
      statusCode
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
