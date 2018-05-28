/*
 -----------------------------------------------------------------
 // Copyright (C) 2016 梁超明 womendi@qq.com 版权所有。
 // 文件名：cmweb.js
 // 文件功能描述：公共js
 // 版本号:v20160901

 // 创 建 人：梁超明 womendi@qq.com
 // 创建日期：2016.02.25
 -----------------------------------------------------------------
 */
// var $=require('jquery');
module.exports = function () {
  var cm = {}
  cm.a = { 'url': 'http://' + window.location.host, 'logts': '请您先登陆', 'isnet': '手机未连接网络哦', 'wlerr': '网络出错了,请检查', 'wling': '正在拼命加载中..', 'wlts': '加载中,请稍等..' }
  // cm.b = $.extend(cm.a, b);
  cm.a.a = '0KGgoghhhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJERDA2QzdGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJERDA2QzhGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkREMDZDNUY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkREMDZDNkY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktNEH8AAArlSURBVHja7J1bbBRVHMaXS1LkUiyRSxWhiaE1IE1kaQDlErAkSomJAYOAPqBopL4AGi4aIoYoFxPhxZUH5IWAQiA+yJoQGi/AA7EMJkWIbUNSUIPSBEIFYg2m/r/pOeU4zMzO7Hbp7M73JZttd2dnzp757f9yrv26uroSFJWt+rMKKAJEESCKAFEEiKIIEEWAKAJEESCKIkAUAaIIEEWAKIoAUQSIIkAUAaIoAkQRIIoAUQSIIkAURYAoAkQRIIoAURQBoggQRYAoAkRRBCicthy9uJa1QICyVvpc+7Kdx9tWsiYIUGh92XilFs8nWq8/y9ogQKF1sPGPN+UpeeVGZ0W6qb2GNUKAgrsuAQbgqH+TP7RcW8haIUChYh+Ao/8XN1bHWiFAgXT2Useos5c7ZjEjI0BZac+p3zaa1ke7MWWVKAIU3vrQChGgXKwPrRAByt360AoRIF/tbGjb5mN9/meFWv68VcIaI0B30/am9prWq7erAx6e3NVwaRuxIUBhrc9ddyeu7oeWa1VEhwAl0Fl6s/Pf4SE/Biv0IdGJOUCIZQ6e6e7zCvtZdHXsOfnbIuITY4BULOMFj1U+vOQInr2s0JeNV+qJT0wBwnCNTGn7V/VPLp4wanCT1/twfa983rSXAMVQ4n78Gg2tlTPHbsUfa2orNvhZIWRvcXdlsQOofv+FnT6BszV7Qll65ayxcF'
  cm.c = { 'author': 'womendi@qq.com', 'name': 'cmweb.js', 'txt': '公共JS', 'url': 'http://' + window.location.host, 'href': window.location.href, 'hash': window.location.hash, 'nv': window.navigator, 'pf': window.navigator.platform, 'ua': window.navigator.userAgent.toLowerCase() }
  cm.api = { 'url': cm.a.url + '/cmapi', 'i': cm.a.url + '/i.php?', 'upimg': cm.a.url + '/upfile/i', 'up64': cm.a.url + '/upfile/i64' }
  cm.app = { 'url': cm.a.url, 'project': 'ai智能空间', 'name': 'ai智能空间', 'title': 'ai智能空间', 'keywords': 'ai智能空间,人工智能空间,aiplat,aiplat.com,AI,人工智能,智能空间,亲信地铁,亲信,地铁', 'description': 'ai智能空间,即将提供人工智能资讯,目标成为中国最大最全最专业的的人工智能资讯平台。' }
  cm.app.iswx = cm.c.ua.match(/MicroMessenger/i) == 'micromessenger' ? 1 : 0
  cm.app.isapp = cm.c.ua.match(/html5plus/i) == 'html5plus' ? 1 : 0
  cm.cl = function (txt) {
    if(typeof txt == 'object'){
        txt = JSON.stringify(txt);
    }
    console.log('time:' + cm.nowTime() + '-->' + txt)
  }
  cm.c.clid = window.localStorage['cl']
  cm.ajax = function (url, data, type, dt, isload, func) {
    var err = { 'res': 'error', 'msg': cm.a.wlerr, 'list': [] }
    if (!url || !type || !dt) {
      func(err)
      return
    }
    $.ajax({
      url: url,
      data: data,
      type: type,
      dataType: dt,
      cache: false,
      async: true,
      timeout: 20000,
      beforeSend: function () {
        if (cm.c.clid) {
          cm.cl(cm.a.wling)
        }
        if (isload) {
          cm.loadImg(1)
        }
      },
      success: function (res) {
        cm.loadImg(0)
        if (cm.c.clid) {
          cm.cl(JSON.stringify(data))
          cm.cl(JSON.stringify(res))
        }
        func(res)
      },
      error: function () {
        cm.cl(cm.a.wlerr)
        cm.loadImg(0)
        func(err)
      }
    })
  }
  cm.ajaxUp = function (id, url, func1, func2) {
    var formData = new FormData()
    formData.append('aitp', $(id).prev().val())
    formData.append('file', $(id)[0].files[0])
    $.ajax({
      url: url,
      type: 'POST',
      cache: false,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      cache: false,
      async: true,
      timeout: 1000 * 60 * 60 * 24,
      beforeSend: function () {
        cm.cl(cm.a.wling)
      },
      success: function (res) {
        if (cm.c.clid) {
          cm.cl(JSON.stringify(res))
        }
        func1(res)
      },
      error: function () {
        func2()
      }
    })
    return false
  }
  cm.upfile = function (fileid, ckid, tarid, func, url) {
    cm.ck(ckid, function (t) {
      cm.cl(t);
      $(fileid).trigger('click')
    })
    cm.ck(fileid, function (t) {
      cm.cl(t);
      cm.upts('上传中,请稍候..', 1)
      url = url || cm.api.upimg
      cm.ajaxUp(fileid, url, function (res) {
        cm.f2Back(res, function (t) {
          cm.upts(t.msg)
          $(tarid).attr('src', cm.api.i + res.list.img)
          func(t)
        }, function (t) {
          cm.upts(t.msg)
        })
      }, function (res) {
        cm.cl(res);
        cm.upts('上传失败')
      })

    }, 1)
  }
  cm.f2Back = function (res, func1, func2) {
    if (res.res == 0) {
      func1(res)
    } else {
      func2(res)
    }
  }
  cm.setLS = function (k, v, t) {
    var tp = t ? window.sessionStorage : window.localStorage
    tp[k] = v
  }
  cm.getLS = function (k, t) {
    var tp = t ? window.sessionStorage : window.localStorage
    return tp[k] ? tp[k] : ''
  }
  cm.clearLS = function (k, t) {
    var tp = t ? window.sessionStorage : window.localStorage
    if (k) {
      tp.removeItem(k)
    } else {
      tp.clear()
    }
  }
  cm.lt10 = function (m) {
    if (m < 10) {
      m = '0' + m
    }
    return m
  }
  cm.nowTime = function (nd, tp, f, str) {
    var n = new Date()
    if (nd != '' && tp == 1) {
      if (typeof(nd) !== 'int') {
        if (!str) {
          nd = parseInt(nd)
          nd *= 1000
        }
        n = new Date(nd)
      }
      n = new Date(nd)
    }
    var y = n.getYear() + 1900
    var m = cm.lt10(n.getMonth() + 1)
    var d = cm.lt10(n.getDate())
    var h = cm.lt10(n.getHours())
    var m2 = cm.lt10(n.getMinutes())
    var s = cm.lt10(n.getSeconds())
    var t = y + '-' + m + '-' + d + ' ' + h + ':' + m2 + ':' + s
    if (f == 1) {
      t = y + '-' + m + '-' + d
    } else if (f == 2) {
      t = y + '-' + m + '-' + d + ' ' + h + ':' + m2 + ':' + s
    } else if (f == 3) {
      t = y + '/' + m
    }
    if (tp == 0) {
      t = parseInt(n.valueOf() / 1000)
    }
    return t
  }
  cm.nowTime2 = function (tp, nd, f) {
    /*
         * 1，当前日期时间戮  cm.nowTime2(0,0);
         * 2，日期转时间戮  cm.nowTime2(0,'2017-01-01');
         * 3，时间戮转日期  cm.nowTime2(1,'1500002222',f);//f为格式
         * */
    var n, t
    if (nd) {
      n = new Date(nd)
    } else {
      n = new Date()
    }
    if (tp == 0) { // 日期转时间戮
      t = parseInt(n.valueOf() / 1000)
    } else { // 时间戮转日期
      var y = n.getYear() + 1900
      var m = cm.lt10(n.getMonth() + 1)
      var d = cm.lt10(n.getDate())
      var h = cm.lt10(n.getHours())
      var m2 = cm.lt10(n.getMinutes())
      var s = cm.lt10(n.getSeconds())
      switch (f) {
        case 1:
          t = y + '-' + m + '-' + d + ' ' + h + ':' + m2 + ':' + s
          break
        case 2:
          t = y + '/' + m + '/' + d + ' ' + h + ':' + m2 + ':' + s
          break
        case 3:
          t = y + '/' + m + '/' + d
          break
        case 4:
          t = y + '/' + m + '/' + d + '-' + h + ':' + m2 + ':' + s
          break
        case 5:
          t = y + '/' + m
          break
        case 6:
          t = h + ':' + m2 + ':' + s
          break
        case 7:
          t = m + '/' + d
          break
        default:
          t = y + '-' + m + '-' + d
          break
      }
    }
    return t
  }
  cm.xlh = function (id) {
    var x = document.getElementById(id)
    x = x.elements
    var len = x.length, obj = {}
    for (var i = 0; i < len; i++) {
      obj[x[i].name] = x[i].value
      if (i == len - 1) {
        return obj
      }
    }
  }
  cm.isUname = function (val) {
    //var regC = new RegExp('^[\u4e00-\u9fa5]{3,12}$')
    var regN = new RegExp('^[\w\u4e00-\u9fa5]+$')
    if (!val) {
      val = '用户名不能为空'
    } else if (!regN.test(val)) {
      val = '用户名由中文 字母 数字组成'
    } else {
      val = 1
    }
    return val
  }
  cm.isUser = function (val) {
    var regN = new RegExp('^[a-zA-Z]{1}([a-zA-Z0-9]){2,11}$')
    if (!val) {
      val = '不能为空'
    } else if (!regN.test(val)) {
      val = '由3-12个字母与数字组成'
    } else {
      val = 1
    }
    return val
  }
  cm.isSj = function (val) {
    var reg = new RegExp('^1[3|5|7|8][0-9]{9}$')
    if (!val) {
      val = '手机号不能为空'
    } else if (!(reg.test(val))) {
      val = '请输入有效的11位手机号'
    } else {
      val = 1
    }
    return val
  }
  cm.isPwd = function (val) {
    var reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$')
    if (!val) {
      val = '密码不能为空'
    } else if (!reg.test(val)) {
      val = '密码由6-15个字母与数字组成'
    } else {
      val = 1
    }
    return val
  }
  cm.isYzm = function (val) {
    var reg = new RegExp('^([0-9]){6}$')
    if (!val) {
      val = '验证码不能为空'
    } else if (!reg.test(val)) {
      val = '验证码由6个数字组成'
    } else {
      val = 1
    }
    return val
  }
  cm.isZFmm = function (val) {
    var reg = new RegExp('^([0-9]){6}$')
    if (!val) {
      val = '支付密码不能为空'
    } else if (!reg.test(val)) {
      val = '支付密码由6个数字组成'
    } else {
      val = 1
    }
    return val
  }
  cm.chkPW = function (p1, p2) {
    var val
    if (p1 != p2) {
      val = '两次密码不一致'
    } else {
      val = 1
    }
    return val
  }
  cm.isMail = function (val) {
    var reg = /^[a-zA-z0-9][a-zA-Z0-9_\-\.]*@([a-zA-Z0-9]+[_\-\.])+[a-zA-Z]{2,4}$/
    if (!val) {
      val = '邮箱不能为空'
    } else if (!(reg.test(val))) {
      val = '请输入有效的邮箱'
    } else {
      val = 1
    }
    return val
  }
  cm.chkLog = function (tp, isyz) { // tp==log,reg,mm
    var m = $('input[name=mobile]')
    var p1 = $('input[name=pass]')
    var p2 = $('input[name=pass2]')
    var y = $('input[name=yzm]')
    var arr = [m.val(), p1.val(), p2.val(), y.val()]

    var ck1 = cm.isSj(arr[0])
    var ck2 = cm.isPwd(arr[1])
    var ck3 = cm.isPwd(arr[2])
    var ck4 = cm.chkPW(arr[1], arr[2])
    var ck5 = cm.isYzm(arr[3])
    if (ck1 != 1) {
      cm.upts(ck1)
      m.focus()
      return 0
    } else if (ck2 != 1) {
      cm.upts(ck2)
      p1.focus()
      return 0
    } else {
      if (tp == 'log') {
        return 1
      }
      if (ck3 != 1) {
        cm.upts(ck3)
        p2.focus()
        return 0
      } else if (ck4 != 1) {
        cm.upts(ck4)
        p2.focus()
        return 0
      }
      if (isyz == 1) {
        if (ck5 != 1) {
          cm.upts(ck5)
          y.focus()
          return 0
        }
      }
    }
    return 1
  }
  cm.sfz = function (idcard) {
    var Errors = new Array(1, '身份证号码位数不对', '出生日期错误', '身份证号码错误', '身份证地区非法')
    var area = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: 'xinjiang', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
    var Y, JYM
    var S, M, ereg, Err
    var idcard_array = new Array()
    idcard_array = idcard.split('')
    if (area[parseInt(idcard.substr(0, 2))] == null) {
      Err = Errors[4]
      return Err
    }
    switch (idcard.length) {
      case 15:
        if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/// 测试出生日期的合法性
        } else {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/// 测试出生日期的合法性
        }
        if (ereg.test(idcard)) {
          Err = Errors[0]
        } else {
          Err = Errors[2]
        }
        break
      case 18:
        if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
          ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/// 闰年出生日期的合法性正则表达式
        } else {
          ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/// 平年出生日期的合法性正则表达式
        }
        if (ereg.test(idcard)) {
          S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3
          Y = S % 11
          M = 'F'
          JYM = '10X98765432'
          M = JYM.substr(Y, 1)
          if (M == idcard_array[17]) {
            Err = Errors[0]
          } else {
            Err = Errors[3]
          }
        } else {
          Err = Errors[2]
        }
        break
      default:
        Err = Errors[1]
        break
    }
    return Err
  }
  cm.ck = function (id, func, tp, ise) {
    cm.a.a = 'dgfhjhfgjdghtyutyYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJERDA2QzdGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJERDA2QzhGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkREMDZDNUY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkREMDZDNkY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktNEH8AAArlSURBVHja7J1bbBRVHMaXS1LkUiyRSxWhiaE1IE1kaQDlErAkSomJAYOAPqBopL4AGi4aIoYoFxPhxZUH5IWAQiA+yJoQGi/AA7EMJkWIbUNSUIPSBEIFYg2m/r/pOeU4zMzO7Hbp7M73JZttd2dnzp757f9yrv26uroSFJWt+rMKKAJEESCKAFEEiKIIEEWAKAJEESCKIkAUAaIIEEWAKIoAUQSIIkAUAaIoAkQRIIoAUQSIIkAURYAoAkQRIIoAURQBoggQRYAoAkRRBCicthy9uJa1QICyVvpc+7Kdx9tWsiYIUGh92XilFs8nWq8/y9ogQKF1sPGPN+UpeeVGZ0W6qb2GNUKAgrsuAQbgqH+TP7RcW8haIUChYh+Ao/8XN1bHWiFAgXT2Useos5c7ZjEjI0BZac+p3zaa1ke7MWWVKAIU3vrQChGgXKwPrRAByt360AoRIF/tbGjb5mN9/meFWv68VcIaI0B30/am9prWq7erAx6e3NVwaRuxIUBhrc9ddyeu7oeWa1VEhwAl0Fl6s/Pf4SE/Biv0IdGJOUCIZQ6e6e7zCvtZdHXsOfnbIuITY4BULOMFj1U+vOQInr2s0JeNV+qJT0wBwnCNTGn7V/VPLp4wanCT1/twfa983rSXAMVQ4n78Gg2tlTPHbsUfa2orNvhZIWRvcXdlsQOofv+FnT6BszV7Qll65ayxcF'
    var p
    switch (tp) {
      case 1:
        p = 'change'
        break
      case 2:
        p = 'keyup'
        break
      case 3:
        p = 'touchstart'
        break
      case 4:
        p = 'mouseenter'
        break
      case 5:
        p = 'mouseleave'
        break
      case 6:
        p = 'focus'
        break
      case 7:
        p = 'blur'
        break
      default:
        p = 'click'
        break
    }
    $(id).unbind(p).bind(p, function (e) {
      var t = $(this)
      if (ise) {
        e.preventDefault()
      }
      if (typeof func === 'function') {
        func(t, e)
      }
    })
    if (p == 'click') {
      $(id).unbind('touchstart').bind('touchstart', function (e) {
        if (cm.isMob() == 0) {
          e.preventDefault()
        }
      })
    }
    if (p == 'touchstart') {
      $(id).bind('touchend', function () {
        var t = $(this)
        t.removeClass('cm_be')
      })
    }
  }
  cm.upts = function (txt, tp, func, time, ismv) {
    var ut = '.cm_upts'
    $(ut).remove()
    if (ismv) {
      return
    }
    $('<div class="' + ut.substr(1) + '"></div>').appendTo('body')
    cm.tno(ut, 1)
    var div = '.cm_tsdiv'
    $('<div class="' + div.substr(1) + ' cm_dn2"></div>').appendTo(ut)
    $(div).html(txt).slideDown(268)
    if (!tp) {
      setTimeout(function () {
        $(div).slideUp(268, function () {
          $(ut).remove()
        })
        if (typeof func === 'function') {
          func()
        }
      }, time || 1200)
    }
  }
  cm.setH = function (div, num) {
    var h = $(window).height()
    var f = parseInt($('#cm_author').css('font-size'))
    if (!num) {
      num = 0
    }
    h = h - num * f
    $(div).css({ 'height': h + 'px' })
  }
  cm.tme = function (div, tf, mf, ef) {
    $(div).on('touchstart', function (e) {
      if (typeof tf === 'function') {
        tf($(this), e)
      }
    }).on('touchmove', function (e) {
      if (typeof mf === 'function') {
        mf($(this), e)
      }
    }).on('touchend', function (e) {
      if (typeof ef === 'function') {
        ef($(this), e)
      }
    })
  }
  cm.tno = function (div, ise, func) {
    if (cm.isMob() == 0) {
      cm.ck(div, function (t, e) {
        func(t, e)
      })
      return
    }
    $(div).unbind('touchstart').bind('touchstart', function (e) {
      if (ise) {
        e.preventDefault()
      }
      if (typeof func === 'function') {
        func($(this), e)
      }
    })
  }
  cm.lei2 = function (isBack, func, func2) {
    cm.a.a = 'dhgfuryrirtrytutytuYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJERDA2QzdGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJERDA2QzhGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkREMDZDNUY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkREMDZDNkY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktNEH8AAArlSURBVHja7J1bbBRVHMaXS1LkUiyRSxWhiaE1IE1kaQDlErAkSomJAYOAPqBopL4AGi4aIoYoFxPhxZUH5IWAQiA+yJoQGi/AA7EMJkWIbUNSUIPSBEIFYg2m/r/pOeU4zMzO7Hbp7M73JZttd2dnzp757f9yrv26uroSFJWt+rMKKAJEESCKAFEEiKIIEEWAKAJEESCKIkAUAaIIEEWAKIoAUQSIIkAUAaIoAkQRIIoAUQSIIkAURYAoAkQRIIoAURQBoggQRYAoAkRRBCicthy9uJa1QICyVvpc+7Kdx9tWsiYIUGh92XilFs8nWq8/y9ogQKF1sPGPN+UpeeVGZ0W6qb2GNUKAgrsuAQbgqH+TP7RcW8haIUChYh+Ao/8XN1bHWiFAgXT2Useos5c7ZjEjI0BZac+p3zaa1ke7MWWVKAIU3vrQChGgXKwPrRAByt360AoRIF/tbGjb5mN9/meFWv68VcIaI0B30/am9prWq7erAx6e3NVwaRuxIUBhrc9ddyeu7oeWa1VEhwAl0Fl6s/Pf4SE/Biv0IdGJOUCIZQ6e6e7zCvtZdHXsOfnbIuITY4BULOMFj1U+vOQInr2s0JeNV+qJT0wBwnCNTGn7V/VPLp4wanCT1/twfa983rSXAMVQ4n78Gg2tlTPHbsUfa2orNvhZIWRvcXdlsQOofv+FnT6BszV7Qll65ayxcF'
    cm.sli2(0, 1)
    cm.loadImg(0)
    cm.bet2('.cmtou', 0)
    cm.bet2('.cmt2', 1)
    cm.bet2('.cmtou2', 2)
    cm.stopCP()
    if (typeof isBack !== 'function') {
      isBack = ''
    }
    if (typeof func !== 'function') {
      func = ''
    }
    if (typeof func2 === 'function') {
      func2()
    }
  }
  cm.bet2 = function (div, tp, func1, func2) {
    cm.tme(div, function (t) {
      switch (tp) {
        case 1:
          t.addClass('cm_o05').siblings().removeClass('cm_o05')
          break
        case 2:
          t.addClass('cm_c5b').siblings().removeClass('cm_c5b')
          break
        default:
          t.addClass('cm_bddd').siblings().removeClass('cm_bddd')
          break
      }
      if (typeof func1 === 'function') {
        func1(t)
      }
    }, function () {

    }, function (t) {
      switch (tp) {
        case 1:
          t.removeClass('cm_o05')
          break
        case 2:
          t.removeClass('cm_c5b')
          break
        default:
          t.removeClass('cm_bddd')
          break
      }
      if (typeof func2 === 'function') {
        func2(t)
      }
    })
  }
  cm.sli2 = function (num, t, div) {
    if (!num) { // num=$(id).offset().top;
      num = 0
    }
    if (!t) {
      t = 555
    }
    var d = 'html,body'
    if (div) { // div='#div
      d = div
    }
    $(d).animate({ scrollTop: num }, t)
  }
  cm.loadImg = function (t, txt) {
    var ts = '加载中..'
    if (txt) {
      ts = txt
    }
    var img = '#cm_Load'
    $(img).remove()
    var html = '<div class="cm_Load" id="cm_Load">' +
            '<div class="cm_fc4 cm_wh100">' +
            '<ul class="cm_fl cm_w6 cm_pr cm_bf cm_br02">' +
            '<li class="cm_pc_12 cm_mt05"><div class="cm_fc cm_loading"></div></li>' +
            '<li class="cm_pc_12 cm_hl2 cm_tc cm_c3c">' +
            ts +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>'
    if (t == 1) {
      $(html).appendTo('body')
    } else {
      $(img).remove()
    }
  }
  cm.scoTop = function (func, num, div) {
    // $('html,body').animate({scrollTop: 0}, 0);
    var cmth
    var type = 0
    if (!num) {
      num = 0
    }
    var f = parseInt($('#cm_author').css('font-size'))
    var h = num * f
    if (div) {
      // h = $(div).offset().top;  在vue中无效
      h = document.getElementById(div.substr(1)).offsetTop
    }
    var cmlist = function (id) {
      func(id)
    }
    $(window).scroll(function () {
      cmth = parseFloat($(window).scrollTop())
      if (cmth <= h) {
        type = 0
      } else {
        if (cmth > 0 && type == 1) {
          return
        }
        type = 1
      }
      cmlist(type)
    })
    cmlist(type)
  }
  /*
    cm.toScroll(function(){
          cm.cl('show');
      },function(){
          cm.cl('hide');
      });
    */
  cm.toScroll = function (func, func2) {
    var cmth
    var loaded = 0
    var stoped = 1
    var cmlist = function () {
      func()
      loaded = 0
      stoped = 1
    }
    var isf2 = 0
    var cmlist2 = function () {
      func2()
      loaded = 0
      stoped = 1
      isf2 = 1
    }
    cm.clearLS('nosl')
    $(window).scroll(function () {
      var nosl = cm.getLS('nosl')
      if (nosl) {
        loaded = 1
        stoped = 0
      } else {
        loaded = 0
        stoped = 1
      }
      if (loaded) {
        return
      }
      cmth = parseFloat($(window).height()) + parseFloat($(window).scrollTop())
      if ($(document).height() <= cmth) {
        if (stoped) {
          loaded = 1
          stoped = 0
          isf2 = 0
          cmlist()
        }
      } else {
        if (isf2) {
          return
        }
        if (stoped && typeof func2 === 'function') {
          loaded = 1
          stoped = 0
          cmlist2()
        }
      }
    })
    cmlist()
  }
  cm.popK = function (div, html, func, isbd) {
    var div2 = '<div class="cm_pf cm_z9999 cm_bl0 cm_w100" id="' + div.substr(1) + '"><div class="cm_pc_12 cm_c2b02 aall"></div></div>'
    var bd = 'body'
    if (isbd) {
      bd = isbd
    }
    $(bd).append(div2)
    var p = $(div)
    var a = p.find('.aall'), h = $(window).height()
    a.css('height', h + 'px')
    cm.tno('.aall', 1, function () {
      p.remove()
    }, 1)
    a.after(html)
    if (typeof func === 'function') {
      func(p)
    }
  }
  cm.upqdk = function (title, txt, qxbut, qdbut, func, isleft) {
    title = title || '温馨提示'
    txt = txt || '是否继续操作'
    if (txt.length > 12) {
      title = txt.substr(0, 12) + '..'
    }
    if (txt.length > 18) {
      txt = txt.substr(0, 18) + '..'
    }
    qxbut = qxbut || '取消'
    qdbut = qdbut || '确定'
    var but1 = 'upqd', but2 = 'upqx'
    var bk1 = 'cm_c1b', bk2 = 'cm_c2b'
    var ck1 = 'cm_cf', ck2 = 'cm_cf'
    if (isleft == 1) {
      but1 = 'upqx', but2 = 'upqd'
      bk1 = 'cm_c2b', bk2 = 'cm_c1b'
      var atxt = qxbut
      qxbut = qdbut
      qdbut = atxt
    }
    var putdiv = '<div class="cm_fl cm_tsdiv2 cm_br05 cm_oh cm_dn2">' +
            '<div class="cm_pc_12 cm_hl2 cm_be cm_brtr05 cm_brtl05 cm_ti05">' + title + '</div>' +
            '<div class="cm_pc_12 cm_prl05 cm_wb_b cm_tl cm_lh105 cm_mtb02 ques">' + txt + '?</div>' +
            '<div class="cm_pc_12 cm_bf cm_tc cm_ptb05">' +
            '<div class="cm_pc_6"><div class="cm_fc cm_w3 cm_hl105 cm_prl05 cm_br02 cmt2 ' + ck1 + ' ' + bk1 + ' ' + but1 + '">' + qdbut + '</div></div>' +
            '<div class="cm_pc_6"><div class="cm_fc cm_w3 cm_hl105 cm_prl05 cm_br02 cmt2 ' + ck2 + ' ' + bk2 + ' ' + but2 + '">' + qxbut + '</div></div>' +
            '</div>' +
            '</div>'
    var html = '<div class="cm_pf cm_z9999 cm_tr0 cm_w100"><div class="cm_pa cm_l0 cm_w100 cm_t12"><div class="cm_pc_12 cm_prl2">' + putdiv + '</div></div></div>'
    cm.popK('#cmqdk', html, function (p) {
      var ts2 = p.find('.cm_tsdiv2')
      ts2.slideDown(268)
      cm.ck('.upqx', function () {
        p.remove()
        if (typeof func === 'function') {
          func(0)
        }
      })
      cm.ck('.upqd', function () {
        p.remove()
        if (typeof func === 'function') {
          func(1)
        }
      })
      cm.tno('.aall', 1, function () {
        p.remove()
      })
    })
  }
  cm.isMob = function () {
    var ua = cm.c.ua
    if (ua.indexOf('mobile') >= 0) {
      if (ua.indexOf('android') >= 0) {
        return 1
      } else if (ua.indexOf('iphone') >= 0) {
        return 2
      } else {
        return 3
      }
    } else {
      return 0
    }
  }
  cm.sword2 = function (div, title, txt, len, isval, func, noh) {
    if (!len) {
      len = 1024
    }
    var swdiv = '<div class="cm_pc_12">' +
            '<div class="cm_pc_12 cm_h8 cminput cm_bf cm_pr">' +
            '<textarea name="sayword" placeholder="' + txt + '" class="cm_pd05 cm_b1e cm_br02 cm_lh105" maxlength="' + len + '"/></textarea>' +
            '</div>' +
            '</div>'
    if (!noh) {
      $(div).html(swdiv)
    }
    if (isval) {
      $(div).find('textarea').val(isval)
    }
    var iswx = 'cm_t6e'
    if (cm.app.iswx) {
      iswx = 'cm_t3e'
    }
    var html = '<div class="cm_pf cm_z9999 cm_tr0 cm_w100">' +
            '<div class="cm_pa cm_l0 cm_w100 ' + iswx + '">' +
            '<div class="cm_pc_12 cm_prl1">' +
            '<div class="cm_pc_12 cm_hl3 cm_ti05 cm_bf cm_fwb">' + title + '</div>' +
            swdiv +
            '</div>' +
            '</div>' +
            '</div>'
    cm.ck(div, function () {
      cm.popK('#swcont', html, function (p) {
        var sw = p.find('textarea[name=sayword]')
        var sw2 = $(div).find('textarea[name=sayword]')
        sw.focus().attr('placeholder', sw2.attr('placeholder'))
        sw.val(sw2.val())
        cm.tno('.aall', 1, function () {
          sw2.val(sw.val())
          p.remove()
          if (typeof func === 'function') {
            if (!sw.val()) {
              return
            }
            func(sw.val())
          }
        })
      }, '#WXH')
    })
  }

  cm.setWXH = function (div) {
    // cm.app.iswx=1;
    var div2 = div || '#WXtitle'
    if (cm.app.iswx) {
      $(div2).next().removeClass('cm_mt3').addClass('cm_mt0')
      $(div2).remove()
    }
  }
  cm.stopCP = function () {
    document.oncontextmenu = function (event) {
      if (window.event) {
        event = window.event
      }
      try {
        var the = event.srcElement
        if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
          return false
        }
        return true
      } catch (e) {
        return false
      }
    }
    document.onpaste = function (event) {
      if (window.event) {
        event = window.event
      }
      try {
        var the = event.srcElement
        if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
          return false
        }
        return true
      } catch (e) {
        return false
      }
    }
    document.oncopy = function (event) {
      if (window.event) {
        event = window.event
      }
      try {
        var the = event.srcElement
        if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
          return false
        }
        return true
      } catch (e) {
        return false
      }
    }
    document.oncut = function (event) {
      if (window.event) {
        event = window.event
      }
      try {
        var the = event.srcElement
        if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
          return false
        }
        return true
      } catch (e) {
        return false
      }
    }
    document.onselectstart = function (event) {
      if (window.event) {
        event = window.event
      }
      try {
        var the = event.srcElement
        if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
          return false
        }
        return true
      } catch (e) {
        return false
      }
    }
    cm.a.a = 'DFG8U2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJERDA2QzdGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJERDA2QzhGNUU2MTFFNkIxMzVEMTM0NTE0RjczNzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkREMDZDNUY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkREMDZDNkY1RTYxMUU2QjEzNUQxMzQ1MTRGNzM3NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktNEH8AAArlSURBVHja7J1bbBRVHMaXS1LkUiyRSxWhiaE1IE1kaQDlErAkSomJAYOAPqBopL4AGi4aIoYoFxPhxZUH5IWAQiA+yJoQGi/AA7EMJkWIbUNSUIPSBEIFYg2m/r/pOeU4zMzO7Hbp7M73JZttd2dnzp757f9yrv26uroSFJWt+rMKKAJEESCKAFEEiKIIEEWAKAJEESCKIkAUAaIIEEWAKIoAUQSIIkAUAaIoAkQRIIoAUQSIIkAURYAoAkQRIIoAURQBoggQRYAoAkRRBCicthy9uJa1QICyVvpc+7Kdx9tWsiYIUGh92XilFs8nWq8/y9ogQKF1sPGPN+UpeeVGZ0W6qb2GNUKAgrsuAQbgqH+TP7RcW8haIUChYh+Ao/8XN1bHWiFAgXT2Useos5c7ZjEjI0BZac+p3zaa1ke7MWWVKAIU3vrQChGgXKwPrRAByt360AoRIF/tbGjb5mN9/meFWv68VcIaI0B30/am9prWq7erAx6e3NVwaRuxIUBhrc9ddyeu7oeWa1VEhwAl0Fl6s/Pf4SE/Biv0IdGJOUCIZQ6e6e7zCvtZdHXsOfnbIuITY4BULOMFj1U+vOQInr2s0JeNV+qJT0wBwnCNTGn7V/VPLp4wanCT1/twfa983rSXAMVQ4n78Gg2tlTPHbsUfa2orNvhZIWRvcXdlsQOofv+FnT6BszV7Qll65ayxcF'
  }
  cm.isIE = function () {
    var userAgent = navigator.userAgent
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
    return isIE ? 1 : 0
  }
  cm.isIE8 = function (func) {
    var userAgent = navigator.userAgent
    var isIE = cm.isIE()
    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(userAgent)
      var v = parseFloat(RegExp['$1'])
      if (v <= 9) {
        if (typeof func === 'function') {
          func()
        }
      }
      cm.cl(JSON.stringify(userAgent) + '-->ie=' + v)
    } else {
      cm.cl(JSON.stringify(userAgent) + '---->It is not IE')
    }
  }
  cm.keyDown = function (func) {
    function kd (e) {
      var k
      var isIE = cm.isIE()
      if (isIE) {
        k = window.event.keyCode
      } else {
        k = e.keyCode
      }
      func && func(k)
    }
    document.onkeydown = kd
  }
  return cm
}
