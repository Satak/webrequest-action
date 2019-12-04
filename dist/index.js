module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(991);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 178:
/***/ (function() {

eval("require")("@actions/core");


/***/ }),

/***/ 932:
/***/ (function() {

eval("require")("axios");


/***/ }),

/***/ 939:
/***/ (function() {

eval("require")("@actions/github");


/***/ }),

/***/ 991:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(178);
const github = __webpack_require__(939);
const axios = __webpack_require__(932);

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

async function main() {
  try {
    // inputs from action
    const webhookId = core.getInput('webhook-id');
    const payload = JSON.parse(core.getInput('payload'));

    // current time
    const time = new Date().toTimeString();

    // http request to external API
    const statusCode = await webhookCall(webhookId, payload);

    const inputObject = {
      webhookId: webhookId,
      payload: payload,
      time: time,
      statusCode: statusCode
    };

    const consoleOutputJSON = JSON.stringify(inputObject, undefined, 2);
    console.log(consoleOutputJSON);

    const outputJSON = JSON.stringify(inputObject);
    core.setOutput('output', outputJSON);

    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();


/***/ })

/******/ });