const axios = require('axios');

async function webrequest(url, method, payload, headers, username, password) {
  const auth = username && password ? { username, password } : null;
  const config = {
    url,
    method,
    auth,
    data: payload,
    headers
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
