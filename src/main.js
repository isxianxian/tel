import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/style.scss'
import 'lib-flexible/flexible.js'

Vue.use(ElementUI);
import TopNav from './components/TopNav.vue';
Vue.component('TopNav', TopNav);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
