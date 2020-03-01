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
const cm: any = {};
cm.c = {
    url: 'http://' + window.location.host,
    href: window.location.href,
    hash: window.location.hash,
    nv: window.navigator,
    pf: window.navigator.platform,
    ua: window.navigator.userAgent.toLowerCase(),
};
cm.app = {
    url: cm.c.url,
    project: 'ai智能空间',
    name: 'ai智能空间',
    title: 'ai智能空间',
    keywords: 'ai智能空间,人工智能空间,aiplat,aiplat.com,AI,人工智能,智能空间,亲信地铁,亲信,地铁',
    description: 'ai智能空间,即将提供人工智能资讯,目标成为中国最大最全最专业的的人工智能资讯平台。',
};
cm.app.iswx = cm.c.ua.match(/MicroMessenger/i) === 'micromessenger' ? 1 : 0;

export default cm;
