
const initDirective = {
    //当指令绑定到HTML元素时触发， 只调用一次
    bind() {},

    // 当绑定了指令的这个HTML元素插入到父元素上时触发(在这里父元素是 `div#app`)**.但不保证,父元素已经插入了 DOM 文档.**
    insert(el, binding, vnode)  {
        const { value } = binding;
        if(value !== 2) {
            el.setAttribute("class", "hello red");
        }
    },

    // 所在组件的`VNode`更新时调用.
    updated() {},

    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated() {},

    // 只调用一次，指令与元素解绑时调用.
    unbind() {}
}

const install = Vue => {
    Vue.directive('initDirective', initDirective.insert)
}

if(window.Vue) {
    window['initDirective'] = initDirective;
    Vue.use(install);
}

initDirective.install = install;

export default initDirective;

//完成后要全局注册，才可使用