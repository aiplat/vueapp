module.exports = (Vue) => {
  Vue.filter('toDate', (v) => {
    return window.cm.nowTime(1, v * 1000)
  })
  Vue.filter('toTime', (v) => {
    return window.cm.nowTime(0, v)
  })
  Vue.filter('fgDian', (v) => {
    v = v + ''
    v = v.split('.')
    return v[0]
  })
  Vue.filter('fgDian2', (v) => {
    v = v.toFixed(8)
    v = v + ''
    v = v.split('.')
    return v[1] + ''
  })
  Vue.filter('fgDian3', (v) => {
    v = v.toFixed(2)
    v = v + ''
    v = v.split('.')
    return v[1] + ''
  })
  Vue.filter('fix2', (v) => {
    var a = v + ''
    window.cm.cl(a.split('.'))
    return v.toFixed(2)
  })
  Vue.filter('fix8', (v) => {
    return v.toFixed(8)
  })
  return Vue
}
