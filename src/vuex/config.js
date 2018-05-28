var pathUrl = [
  {'url': 'http://localhost:3003', 'name': '本地环境'},
  {'url': 'http://localhost:3003', 'name': '测试环境'},
  {'url': 'http://www.aiplat.com', 'name': '生产环境'}
]
var svUrl = [
  {'url': 'http://localhost:3003', 'name': '本地环境'},
  {'url': 'http://localhost:3003', 'name': '测试环境'},
  {'url': 'http://www.aiplat.com', 'name': '生产环境'}
]
// 0为本地环境，1为测试环境，2为生产环境
var serverId = 0
module.exports = {
  path: pathUrl[serverId].url,
  sv: svUrl[serverId].url
}
