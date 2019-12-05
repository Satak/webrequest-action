const core = require('@actions/core');
const webrequest = require('./webrequest');

async function main() {
  try {
    // inputs from action
    const url = core.getInput('url');
    const methodInput = core.getInput('method');
    const method = methodInput.toLowerCase();
    const payloadInput = core.getInput('payload');
    const payload = payloadInput ? JSON.parse(payloadInput) : null;
    const headersInput = core.getInput('headers');
    const headers = headersInput ? JSON.parse(headersInput) : null;
    const username = core.getInput('username');
    const password = core.getInput('password');

    // current time
    const time = new Date().toTimeString();

    // http request to external API
    const response = await webrequest(
      url,
      method,
      payload,
      headers,
      username,
      password
    );
    const statusCode = response.status;
    // const data = response.data;
    const outputObject = {
      url,
      method,
      payload,
      time,
      statusCode,
      data: response.data
    };

    const consoleOutputJSON = JSON.stringify(outputObject, undefined, 2);
    console.log(consoleOutputJSON);

    if (statusCode >= 400) {
      core.setFailed(`HTTP request failed with status code: ${statusCode}`);
    } else {
      const outputJSON = JSON.stringify(outputObject);
      core.setOutput('output', outputJSON);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
