export default function remoteLoad(url: string, isCallback: any) {
  const win: any = window;
  const r: any = { createScript: null, removeScript: null };
  r.createScript = (url2: string) => {
    const scriptElement: any = document.createElement('script');
    document.body.appendChild(scriptElement);
    const promise: any = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', (e: any) => {
        r.removeScript(scriptElement);
        if (!isCallback) {
          resolve(e);
        }
      }, false);
      scriptElement.addEventListener('error', (e: any) => {
        r.removeScript(scriptElement);
        reject(e);
      }, false);
      if (isCallback) {
        win.callback = (result: any) => {
          resolve(result);
          win.callback = null;
        };
      }
    });
    if (isCallback) {
      if (url2.indexOf('?') < 0) {
        url2 += '?callback=callback';
      } else {
        url2 += '&callback=callback';
      }
    }
    scriptElement.src = url2;
    return promise;
  };
  r.removeScript = (scriptElement: any) => {
    document.body.removeChild(scriptElement);
  };
  return r.createScript(url);
}
