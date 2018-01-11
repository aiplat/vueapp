var axios = require('axios');
export default {
  getApps({state,commit},d){
    var req_arr = [va.http(api.sv+'/static/apps.json',d.data)];
    axios.all(req_arr).then(axios.spread((res)=>{
        d.t.indexData=res.data.result;
    })).catch((err)=>{
        console.log('request error:');
    });
  }
}