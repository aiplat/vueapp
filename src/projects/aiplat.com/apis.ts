import envType from '@/builds/envType';
const env: any = {
    pro: {
        API: 'https://pro.aiplat.com',
        IMG: '//imgpro.aiplat.com',
    },
    ver: {
        API: 'https://ver.aiplat.com',
        IMG: '//imgver.aiplat.com',
    },
    uat: {
        API: 'https://uat.aiplat.com',
        IMG: '//imguat.aiplat.com',
    },
};
const apis: any = {
    server: env[envType],
    aiplat: {
        user: {
            userInfo: '/mine/userInfo',
            reg: '/mine/reg',
            log: '/mine/log',
        },
        app: {
            list: '/app/list',
            info: '/app/info',
        },
        shop: {
            list: '/shop/list',
            info: '/shop/info',
            city: '/shop/city',
        },
    },
};
export default apis;
