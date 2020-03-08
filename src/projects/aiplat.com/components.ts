import Vue from 'vue';
import componentsSet from '@/service/componentsSet';

// import PopConfirm from "@/components/PopConfirm.vue";
// Vue.component('PopConfirm', PopConfirm);

const dir1 = require.context(
    '@/components', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /.vue$/,
);
const dir2 = require.context(
    '@/projects/aiplat.com/components', // 其组件目录的相对路径
    true, // 是否查询其子目录
    /.vue$/,
);

let v1: any = componentsSet(Vue, dir1);
v1 = componentsSet(v1, dir2);

export default v1;
