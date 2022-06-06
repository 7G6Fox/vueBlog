import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'


Vue.config.productionTip = false
Vue.use(Router);
new Vue({
    render: h => h(App),
    router,
    beforeCreate() {
        //事件总线
        Vue.prototype.$bus = this;
    }
}).$mount('#app')