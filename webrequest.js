const axios = require('axios');

async function webrequest(url, method, payload, headers, username, password) {
  const auth = username && password ? { username, password } : null;
  const config = {
    auth,
    headers
  };
  try {
    let response = null;
    if (method === 'post') {
      response = await axios.post(url, payload, config);
    } else if (method === 'put') {
      response = await axios.put(url, payload, config);
    } else if (method === 'patch') {
      response = await axios.patch(url, payload, config);
    } else if (method === 'delete') {
      response = await axios.delete(url, config);
    } else {
      response = await axios.get(url, config);
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = webrequest;
