/*
 -----------------------------------------------------------------
 // Copyright (C) 2016 梁超明 womendi@qq.com 版权所有。
 // 文件名：cmapp.ts
 // 文件功能描述：公共ts
 // 版本号:v20190301

 // 创 建 人：梁超明 womendi@qq.com
 // 创建日期：2019.03.01
 -----------------------------------------------------------------
 */
import loadScript2 from '@/plugins/loadScript';
class CmappClass {
    public title: any;
    public app: any;
    public loadScript: any;
    constructor() {
        this.title = '公共方法(非业务类)'; // 业务类的请单独写，不要写在这里
        const a: any = {
            url: 'http://' + window.location.host,
            href: window.location.href,
            hash: window.location.hash,
            nv: window.navigator,
            pf: window.navigator.platform,
            ua: window.navigator.userAgent.toLowerCase(),
        };
        this.app = a;
        this.loadScript = loadScript2;
    }
    public removeAllSpace = (str: any) => {
        const a = '';
        return str.replace(/\s+/g, a);
    }
    // 读取cookie
    public getCookie = (name: string) => {
        const cmapp: any = this;
        let c: any = document.cookie;
        c = cmapp.removeAllSpace(c);
        let d: any = null;
        if (c.length > 0 && c.indexOf(';') > -1) {
            c = c.split(';');
            c.forEach((item: any) => {
                const a: any = item.split('=')[0];
                const b: any = item.split('=')[1];
                if (a === name) {
                    d = b;
                }
                return item;
            });
        }
        return d;
    }
    public setLS(k: string, v: any, type: any = 'localStorage') {
        const win: any = window;
        if (k && v) {
            win[type].setItem(k, v);
        }
    }
    public getLS(k: string, type: any = 'localStorage') {
        const win: any = window;
        return win[type].getItem(k) || '';
    }
    public clearLS(k: string, type: any = 'localStorage') {
        const win: any = window;
        if (k) {
            win[type].removeItem(k);
        } else {
            win[type].clear();
        }
    }
    public lt10(m: any) { // 0~9前加0
        const a: any = m < 10 ? `0${m}` : m;
        return m < 10 ? `0${m}` : m;
    }
    /*
   * 1，当前日期时间戮  cmapp.nowTime(0,0);
   * 2，日期转时间戮  cmapp.nowTime(0,'2017-01-01');
   * 3，时间戮转日期  cmapp.nowTime(1,'1500002222',f);//f为格式
   * */
    public nowTime(tp: any, nd: any, f: any) {
        const cmapp: any = this;
        let n: any = null;
        let t: any = null;
        if (nd) {
            n = new Date(nd);
        } else {
            n = new Date();
        }
        if (tp === 0) { // 日期转时间戮
            const v: any = n.valueOf() / 1000;
            t = parseInt(v, 10);
        } else { // 时间戮转日期
            const y: any = n.getFullYear();
            const m: any = cmapp.lt10(n.getMonth() + 1);
            const d: any = cmapp.lt10(n.getDate());
            const h: any = cmapp.lt10(n.getHours());
            const m2: any = cmapp.lt10(n.getMinutes());
            const s: any = cmapp.lt10(n.getSeconds());
            switch (f) {
                case 1:
                    t = `${y}-${m}-${d} ${h}:${m2}:${s}`;
                    break;
                case 2:
                    t = `${y}/${m}/${d} ${h}:${m2}:${s}`;
                    break;
                case 3:
                    t = `${y}/${m}/${d}`;
                    break;
                case 4:
                    t = `${y}/${m}`;
                    break;
                case 5:
                    t = `${m}/${d}`;
                    break;
                case 6:
                    t = `${y}-${m}-${d}`;
                    break;
                case 7:
                    t = `${y}-${m}`;
                    break;
                case 8:
                    t = `${m}-${d}`;
                    break;
                case 9:
                    t = `${h}:${m2}:${s}`;
                    break;
                case 10:
                    t = `${y}年${m}月${d}日`;
                    break;
                default:
                    t = `${y}-${m}-${d}`;
                    break;
            }
        }
        return t;
    }
    /**
     * 倒计时(进度条显示的时间)
     * @param time 结束时间戮
     * @param type 返回类型
     */
    public jdtTime(time: any, type: any, isFan: any) {
        let nd: any = new Date().valueOf();
        let jdt: any = 0;
        const arr: any[] = [3600, 24, 60, 10];
        let time2: any = time;
        if (isFan) {
            const a: any = nd;
            nd = time2;
            time2 = a;
        }
        if (time2 && time2 > nd) {
            const v1: any = (time2 - nd) / (arr[3] * arr[3] * arr[3]);
            const n: number = parseInt(v1, arr[3]);
            const v2: any = n / (arr[0] * arr[1]);
            const d: number = parseInt(v2, arr[3]);
            const v3: any = ((n - d * arr[0] * arr[1]) / arr[0]);
            const h: number = parseInt(v3, arr[3]);
            const v4: any = ((n - d * arr[0] * arr[1] - h * arr[0]) / arr[2]);
            const m: number = parseInt(v4, arr[3]);
            const s: any = n - d * arr[0] * arr[1] - h * arr[0] - m * arr[2];
            jdt = `${d}天${h}时${m}分${s}秒`;
            if (d <= 0) {
                if (type === 1) {
                    jdt = `${h}时${m}分${s}秒`;
                }
                if (h <= 0 && type === 2) {
                    jdt = `${m}分${s}秒`;
                }
            }
            if (type === 3) {
                jdt = {
                    d, h, m, s,
                };
            }
        }
        return jdt;
    }
}

export default CmappClass;
