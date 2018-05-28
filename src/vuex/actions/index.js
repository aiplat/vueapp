var axios = require('axios')
export default {
  getIndex({ }, d) {
    var req_arr = [window.va.http(window.api.sv + '/static/index.json', d.data)]
    axios.all(req_arr).then(axios.spread((res) => {
      d.t.indexData = res.data.result
      d.func && d.func(1, res)
    })).catch((err) => {
      d.func && d.func(0, 'error')
      console.log(err)
    })
  }
}
