var axios = require('axios')
export default {
  getDonate({}, d) {
    var req_arr = [window.va.http(window.api.sv + '/static/donate.json', d.data)]
    axios.all(req_arr).then(axios.spread((res) => {
      d.t.indexData = res.data.result
    })).catch((err) => {
      d.func && d.func('error')
      console.log(err)
    })
  }
}
