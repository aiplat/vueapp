// Copyright (C) 2018 aiplat.com 版权所有
// 文件名：h5plusApi.js(已更改为ts文件)
// 版本号:v20180716001
// 文件功能描述:封装http://www.html5plus.org/doc/的
// 部分实用api为app接口,放到html5项目去调用,
// 以实现跨平台的真正html5开发

const win: any = window;

const app: any = {
  href: win.location.href,
  hash: win.location.hash,
  ua: win.navigator.userAgent.toLowerCase(),
  iswx: 0,
  isapp: 0,
};
app.iswx = app.ua.split('micromessenger').length > 1 ? 1 : 0;
app.isapp = app.ua.split('html5plus').length > 1 ? 1 : 0;

const H5plus: any = {
  app,
};

// api00:alert
H5plus.alert = (txt: string) => {
  win.plus.nativeUI.alert(txt);
};

// api01:录音
H5plus.audio = (url: string, func: any) => {
  const r = win.plus.audio.getRecorder();
  r.record({ filename: url }, () => {
    func(r, 1);
  }, (e: any) => {
    func(r, e.message);
  });
};

// api02:录音-暂停
H5plus.audioStop = (r: any) => {
  r.stop();
};

// api04:拍照
H5plus.camera = (func: any, type: any) => {
  const cmr: any = win.plus.camera.getCamera();
  const res: any = cmr.supportedImageResolutions[0];
  const fmt: any = cmr.supportedImageFormats[0];
  const df: any = { resolution: res, format: fmt };
  if (type === 1) {
    delete df.format;
  }
  cmr.captureImage((path: any) => {
    func(1, path);
  }, (error: any) => {
    func(0, error.message);
  }, df);
};

// api05:摄像
H5plus.video = (func: any) => {
  const cmr: any = win.plus.camera.getCamera();
  const res: any = cmr.supportedImageResolutions[0];
  const fmt: any = cmr.supportedImageFormats[0];
  cmr.startVideoCapture((path: any) => {
    func(1, path);
  }, (error: any) => {
    func(0, error.message);
  }, { resolution: res, format: fmt });
};

// api06:获取通讯录
H5plus.contacts = (func: any) => {
  win.plus.contacts.getAddressBook(win.plus.contacts.ADDRESSBOOK_PHONE, (addressbook: any) => {
    // 可通过addressbook进行通讯录操作
    // addressbook={"type":0}表示没获得系统权限
    func(1, addressbook);
  }, (e: any) => {
    func(0, e.message);
  });
};

// api07:向通讯录中添加联系人
H5plus.contactsAdd = (name: any, type: any, phone: any, func: any) => {
  win.plus.contacts((addressbook: any) => {
    const contact = addressbook.create();
    contact.name = { givenName: name };
    contact.phoneNumbers = [{ type, value: phone, preferred: true }];
    contact.save();
    if (typeof func === 'function') {
      func(contact);
    }
  });
};

// api08:获取设备信息 device属性有imei,imsi,model,vendor,uuid
H5plus.device = () => win.plus.device;

// api09:获取网络类型
H5plus.net = () => {
  const types: any = {};
  types[win.plus.networkinfo.CONNECTION_UNKNOW] = 'Unknown';
  types[win.plus.networkinfo.CONNECTION_NONE] = 'None';
  types[win.plus.networkinfo.CONNECTION_ETHERNET] = 'Ethernet';
  types[win.plus.networkinfo.CONNECTION_WIFI] = 'WiFi';
  types[win.plus.networkinfo.CONNECTION_CELL2G] = '2G';
  types[win.plus.networkinfo.CONNECTION_CELL3G] = '3G';
  types[win.plus.networkinfo.CONNECTION_CELL4G] = '4G';
  return types[win.plus.networkinfo.getCurrentType()];
};

// api10:下载文件
H5plus.down = (url: string, func: any, filename: string, isShowWaiting: any = true) => {
  if (isShowWaiting) {
    win.plus.nativeUI.showWaiting('下载中,请稍等..');
  }
  win.plus.downloader.createDownload(url, { filename: filename || '_doc/download/' }, (d: any, status: any) => {
    if (status === 200) {
      func(d.filename); // d.filename为存放位置,如安装升级包,用H5plus.install(d.filename)
    } else {
      win.plus.nativeUI.alert('下载失败!');
      func('下载失败');
    }
    win.plus.nativeUI.closeWaiting();
  }).start();
};

// 删除文件
H5plus.delFile = (url: string, func: any) => {
  win.plus.io.requestFileSystem(win.plus.io.PRIVATE_DOC, (fs: any) => {
    if (win.plus.os.name !== 'Android' && url.includes('_doc/')) {
      [, url] = url.split('_doc/');
    }
    fs.root.getFile(url, { create: true }, (entry: any) => {
      entry.remove(() => {
        func('删除成功');
      }, () => {
        func('删除失败');
      });
    });
  });
};

// api11:切换到前台,后台 事件
H5plus.frontBack = (func1: any, func2: any) => {
  document.addEventListener('resume', () => {
    func1('切换到前台');
  }, false);
  document.addEventListener('pause', () => {
    func2('切换到后台');
  }, false);
};

// api12:从相册中选取一张图片
H5plus.pick = (func: any) => {
  win.plus.gallery.pick((path: any) => {
    func(1, path);
  }, (e: any) => {
    func(0, e.message);
  }, { filter: 'none' });
};

// api13:从相册中选取多张图片
H5plus.pick2 = (func: any) => {
  win.plus.gallery.pick((e: any) => {
    func(1, e.files);
  }, (e: any) => {
    func(0, e.message);
  }, { filter: 'none', multiple: true });
};

// api14:保存图片或视频到系统相册中
H5plus.pickSave = (path: string, func: any) => {
  win.plus.gallery.save(path, () => {
    if (func && typeof func === 'function') {
      func();
    } else {
      win.plus.nativeUI.toast('保存成功!');
    }
  });
};

// api15:获取当前设备位置信息
H5plus.geo = (type: string, func: any) => {
  win.plus.geolocation.getCurrentPosition((p: any) => {
    // p.coords.latitude
    // p.coords.longitude
    // p.coords.altitude
    func(1, p);
  }, (e: any) => {
    func(0, e.message);
  }, { enableHighAccuracy: true, provider: type || 'baidu' });
};

// api17:系统类型
H5plus.isMob = () => {
  const t = H5plus;
  if (t.app.ua.indexOf('mobile') >= 0) {
    if (t.app.ua.indexOf('android') >= 0) {
      return 1;
    } else if (t.app.ua.indexOf('iphone') >= 0) {
      return 2;
    }
    return 3;
  }
  return 0; // pc
};

// api18:appid
H5plus.appid = () => win.plus.runtime.appid;

// api19:APP属性
H5plus.appAttr = (func: any) => {
  win.plus.runtime.getProperty(win.plus.runtime.appid, (wgtinfo: any) => {
    func(wgtinfo);
  });
};

// api20:使用内置Webview窗口打开url
H5plus.openWeb = (url: string) => {
  win.plus.runtime.openWeb(url);
};

// api21:使用系统默认浏览器打开url
H5plus.openURL = (url: string) => {
  const errorCB = () => {
    win.plus.runtime.openURL(url);
  };

  if (H5plus.isMob() === 1) {
    win.plus.runtime.openURL(url, errorCB, 'com.android.browser');
  } else {
    errorCB();
  }
};

// api22:退出APP或关闭窗口或返回上一页(配合监听返回键)
H5plus.back = (type: any, name: string) => {
  if (type === 1) {
    H5plus.quit();
    return;
  } else if (type === 2) {
    win.plus.webview.close(name); // todo
    return;
  }
  win.history.go(-1);
};

// api23:退出APP
H5plus.quit = () => {
  if (H5plus.isMob() === 1) {
    const main = win.plus.android.runtimeMainActivity();
    main.moveTaskToBack(false);
  } else {
    win.plus.runtime.quit();
  }
};

// api24:重启APP
H5plus.restart = () => {
  win.plus.runtime.restart();
};

// api25:安装APP
H5plus.install = (url: string) => {
  win.plus.runtime.install(url);
};

// api26:plus初始化,每打开一个页面,都要先执行H5plus.ready(),
// 之后才可以调用H5plus其他方法
H5plus.ready = (func: any, isBack: any, isSetBg: any = 0) => {
  const onPlusReady = () => {
    if (typeof func === 'function') {
      func();
    }
    H5plus.listener(0, 'backbutton');
    H5plus.listener(1, 'backbutton', isBack);
    H5plus.app.isapp = win.plus ? 1 : 0;
    if (isSetBg) {
      win.plus.navigator.setStatusBarBackground('#ffffff');
      win.plus.navigator.setStatusBarStyle('dark');
    }
    H5plus.getShareServices();
  };

  if (win.plus) {
    onPlusReady();
  } else {
    console.log('not app');
    document.addEventListener('plusready', onPlusReady, false);
  }
};

// api27:Key管理设备按键事件
H5plus.listener = (type: any, keyCode: any, func: any) => {
  if (type === 1 && typeof func === 'function') {
    win.plus.key.addEventListener(keyCode, func);
  }
  if (type === 0) {
    win.plus.key.removeEventListener(keyCode, func);
  }
};

// api28:listenReturnKey 监听返回键
/**
 * win.H5plus.listenReturnKey();  返回上一页
 * win.H5plus.listenReturnKey(2); 关闭app窗口
 * win.H5plus.listenReturnKey(3);关闭当前webview
 * @param type
 */
H5plus.listenReturnKey = (type: any, path: string) => {
  setTimeout(() => {
    H5plus.ready('', () => {
      console.log(`listenReturnKey===${type}`);
      if (type === 2) {
        H5plus.back(2, path ? `${path}` : 'cxt.html');
      } else if (type === 3) {
        win.plus.webview.currentWebview().close();
      } else if (type === 4) {
        win.location.href = path;
      } else {
        win.history.go(-1);
      }
    });
  }, 111);
};
H5plus.getShareServices = () => {
  win.plus.share.getServices((services: any) => {
    const shares: any = {};
    services.forEach((item: any) => {
      shares[item.id] = item;
    });
    H5plus.app.shares = shares;
    console.log(JSON.stringify(H5plus.app.shares));
  }, (e: any) => {
    console.log(`获取分享服务列表失败：${e.message}`);
  });
};
H5plus.share = (type: any, scene: any, shareData: any, failed: any) => {
  if (H5plus.app.shares[type].authenticated) {
    const msg: any = {
      type: 'web',
      title: shareData.title,
      href: shareData.href,
      content: shareData.content,
      thumbs: shareData.thumbs,
      extra: {
        scene,
      },
    };
    // H5plus.alert(JSON.stringify(win.H5plus.app.shares));
    console.log(JSON.stringify(msg));
    H5plus.app.shares[type].send(msg, () => {
      console.log('share...ok');
    }, (err: any) => {
      H5plus.alert(`${err.code}${err.message}`);
      if (typeof failed === 'function') {
        failed(err);
      }
    });
  } else {
    H5plus.app.shares[type].authorize(() => {
      H5plus.share(type, scene, shareData, failed);
    }, (err: any) => {
      H5plus.alert(`${err.code}${err.message}`);
      if (typeof failed === 'function') {
        failed(err);
      }
    });
  }
};
// 公共分享（小程序，web等等）
H5plus.shareProgram = (type: any, scene: any, shareData: any, failed: any, success: any) => {
  if (H5plus.app.shares[type].authenticated) {
    const msg: any = shareData;
    if (scene && scene.length) {
      const extra2: any = { scene };
      msg.extra = extra2;
    }
    H5plus.app.shares[type].send(msg, () => {
      if (typeof success === 'function') {
        success();
      }
    }, (err: any) => {
      // H5plus.alert(`${err.code}${err.message}`);
      console.log(`${err.code}${err.message}`);
      if (typeof failed === 'function') {
        failed(err);
      }
    });
  } else {
    H5plus.app.shares[type].authorize(() => {
      H5plus.shareProgram(type, scene, shareData, failed, success);
    }, (err: any) => {
      H5plus.alert(`${err.code}${err.message}`);
      if (typeof failed === 'function') {
        failed(err);
      }
    });
  }
};
// 读取文件
H5plus.readFile = (url: string, func: any) => {
  if (win.plus.os.name === 'Android') {
    const BufferedReader = win.plus.android.importClass('java.io.BufferedReader');
    const File = win.plus.android.importClass('java.io.File');
    const FileInputStream = win.plus.android.importClass('java.io.FileInputStream');
    const InputStreamReader = win.plus.android.importClass('java.io.InputStreamReader');
    const jsonFile = new File(win.plus.io.convertLocalFileSystemURL(url));
    const inputStream = new FileInputStream(jsonFile);
    const inputStreamReader = new InputStreamReader(inputStream, 'UTF-8');
    const buffer = new BufferedReader(inputStreamReader);
    func(buffer.readLine().toString());
  } else {
    win.plus.io.requestFileSystem(win.plus.io.PRIVATE_DOC, (fs: any) => {
      if (url.includes('_doc/')) {
        [, url] = url.split('_doc/');
      }
      fs.root.getFile(url, { create: true }, (fileEntry: any) => {
        fileEntry.file((file: any) => {
          const fileReader = new win.plus.io.FileReader();
          fileReader.readAsText(file, 'utf-8');
          fileReader.onloadend = (event: any) => {
            func(event.target.result);
          };
          fileReader.onerror = (e: any) => {
            console.log(e);
            func('');
          };
        });
      });
    });
  }
};

// 复制到粘贴板
H5plus.copyToClip = (text: string) => {
  if (win.plus.os.name === 'Android') {
    const Context = win.plus.android.importClass('android.content.Context');
    const main = win.plus.android.runtimeMainActivity();
    const clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
    win.plus.android.invoke(clip, 'setText', text);
  } else {
    const UIPasteboard = win.plus.ios.importClass('UIPasteboard');
    const generalPasteboard = UIPasteboard.generalPasteboard();
    generalPasteboard.setValueforPasteboardType(text, 'public.utf8-plain-text');
  }
};

// 获取微信授权登录对象
H5plus.authObj = null;
H5plus.weixinAuth = null;
H5plus.getWxAuth = () => {
  return new Promise((resolve, reject) => {
    win.plus.oauth.getServices((services: any) => {
      const a: any = {};
      services.forEach((item: any) => {
        a[item.id] = item;
      });
      H5plus.authObj = a;
      H5plus.weixinAuth = a.weixin;
      resolve(H5plus.weixinAuth);
    }, (e: any) => {
      console.log(`getWxAuth..fail：${JSON.stringify(e)}`);
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(false);
    });
  });
};

/**
 * 去微信授权
 * @returns {Promise<any>}
 */
H5plus.toWxAuth = () => {
  return new Promise((resolve, reject) => {
    H5plus.weixinAuth.authorize(() => {
      resolve(true);
    }, (e: any) => {
      console.log(`toWxAuth..fail：${JSON.stringify(e)}`);
      win.plus.nativeUI.toast('微信授权失败');
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(false);
    });
  });
};

/**
 * 微信登录
 * @returns {Promise<any>}
 */
H5plus.toWxLogin = () => {
  return new Promise((resolve, reject) => {
    H5plus.weixinAuth.login(() => {
      resolve(true);
    }, (e: any) => {
      console.log(`toWxLogin..fail：${JSON.stringify(e)}`);
      win.plus.nativeUI.alert('登录认证失败');
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(false);
    });
  });
};

export default H5plus;
