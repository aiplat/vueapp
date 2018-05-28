var axios = require('axios')
export default {
  getApps({ }, d) {
    var req_arr = [window.va.http(window.api.sv + '/static/apps.json', d.data)]
    axios.all(req_arr).then(axios.spread((res) => {
      d.t.indexData = res.data.result
    })).catch((err) => {
      console.log(err)
    })
  }
}