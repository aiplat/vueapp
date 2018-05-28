var v = function () {
  var _t = {}
  // 返回上一页
  _t.back = function (t) { // t===this
    t.$router.go(-1)
  }
  // axios请求服务器
  _t.http = (url, data, method, headers, params) => {
	    var axios = require('axios')
	    var m = {
	        url: url,
	        method: method || 'get',
	        data: data || {},
	        headers: headers || {},
	        params: params?params:{},
	        timeout: 10000
	    }
	    if (!m.method || m.method == 'GET' || m.method == 'get') {
	        if (m.data) {
	            if (typeof (m.data) === 'string') {
	                m.url += '?' + m.data
	            } else {
	                m.params = m.data
	            }
	        }
	    } else {
	        m.params = m.data
	    }
	    return axios(m)
  }
  _t.http2 = (url, d) => {
    var axios = require('axios')
    var req_arr = [_t.http(url, d.data)]
	    axios.all(req_arr).then(axios.spread((res) => {
	        d.func && d.func(1, res)
	    })).catch((err) => {
	    	d.func && d.func(0, 'error')
	        console.log(err)
	    })
  }
  return _t
}
module.exports = v
