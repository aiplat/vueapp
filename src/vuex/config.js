var svurl = [
    {'url':'','name':'本地环境'},
    {'url':'http://localhost:3003','name':'测试环境'},
    {'url':'http://www.aiplat.com','name':'生产环境'}
];
var apiurl = [
	{'url':'','name':'本地环境'},
    {'url':'http://192.168.1.111:8210','name':'测试环境'},
    {'url':'http://www.aiplat.com','name':'生产环境'}
];
//0为本地环境，1为测试环境，2为生产环境
var serverId = 0;
module.exports = {
	sv:apiurl[serverId].url,
	path:svurl[serverId].url
}