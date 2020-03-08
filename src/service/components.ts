import Vue from 'vue';
import componentsSet from '@/service/componentsSet';

// 例子，注册@/components所有组件
const dir1 = require.context(
    '@/components', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /.vue$/,
);

export default componentsSet(Vue, dir1);
