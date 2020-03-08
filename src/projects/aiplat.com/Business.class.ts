class BusinessClass {
  public win: any;
  public author: any;
  public title: any;
  public app: any;
  constructor() {
    this.win = window;
    this.author = 'aiplat.com';
    this.title = '公共方法(业务类)';
    const a: any = {
      url: 'http://' + window.location.host,
      href: window.location.href,
      hash: window.location.hash,
      nv: window.navigator,
      pf: window.navigator.platform,
      ua: window.navigator.userAgent.toLowerCase(),
    };
    this.app = a;
  }
  public serverSuccess = (res: any) => {
    if (res && res.data && res.data.code && (res.data.code === '200' || res.data.status)) {
      return true;
    }
    return false;
  }
}

export default BusinessClass;
