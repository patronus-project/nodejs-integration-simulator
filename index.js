const pingurl = process.env['API_URL'];
const axios = require('axios')
var i = 0
let params = {
  kc: 900,
  kd: 80,
  kff1258: 90,
  kff1006: 18.562,
  kff1005: 79.4589
}

const incr = {
  kc: 100,
  kd: 5,
  kff1258: 10,
  kff1006: 0.001,
  kff1005: 0.001
}
async function callGET () {
  i++
  Object.keys(params).map(key => (params[key] = params[key] + incr[key]))
  callPayload()
  if (i > 20) {
    params = {
      kc: 900,
      kd: 80,
      kff1258: 90,
      kff1006: 17.4701,
      kff1005: 78.3668
    }
    i=0;
  }
  setTimeout(callGET, 5000)
}
async function callPayload () {
  axios
    .get(pingurl, {
      params
    })
    .then(d => console.log(d.data))
    .catch(e => console.log(e))
}

callGET()
