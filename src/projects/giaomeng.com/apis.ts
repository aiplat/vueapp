import envType from '@/builds/envType';
const env: any = {
    pro: {
        API: 'https://pro.giaomeng.com',
        IMG: '//imgpro.giaomeng.com',
    },
    ver: {
        API: 'https://ver.giaomeng.com',
        IMG: '//imgver.giaomeng.com',
    },
    uat: {
        API: 'https://uat.giaomeng.com',
        IMG: '//imguat.giaomeng.com',
    },
};
const apis: any = {
    server: env[envType],
    giaomeng: {
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
