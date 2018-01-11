var axios = require('axios');
export default {
  getDonate({state,commit},d){
    var req_arr = [va.http(api.sv+'/static/donate.json',d.data)];
    axios.all(req_arr).then(axios.spread((res)=>{
        d.t.indexData=res.data.result;
    })).catch((err)=>{
        d.func&&d.func('error');
	    console.log('request error:');
    });
  }
}