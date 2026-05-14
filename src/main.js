import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import router from "@/router/index";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
};

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class extends _ResizeObserver {
    constructor(callback) {
        super(debounce(callback, 16)); // 16ms≈60帧，从根源避免循环触发
    }
};

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')