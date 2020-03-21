//service.js
const wxRequest = require('wxRequest.js');
const config = require("config.js");

function getBusInfoPromise(busName, stopType) {
  var getBusInfoUrl = config.url.getBusInfo;
  var data = { "busName": busName, "stopType": stopType }
  return wxRequest.wxPromise("POST", getBusInfoUrl, data);
}

function getBusStopListPromise(sid, stopType) {
  var getStopListUrl = config.url.getBusStopList;
  var data = { "sid": sid, "stopType": stopType }
  return wxRequest.wxPromise("POST", getStopListUrl, data);
};