// 公共组件注册方法
export default (v: any, requireComponent: any) => {
    requireComponent.keys().forEach(async (fileName: any) => {
        const componentConfig = requireComponent(fileName);
        const componentName = fileName.split('.vue')[0].substr(2);
        v.component(
            componentName,
            componentConfig.default || componentConfig,
        );
    });
    return v;
};
