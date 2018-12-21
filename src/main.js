// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import {Button,Select,Input,Menu,Rate,MenuItem,Alert,Dialog,Radio,RadioGroup,Checkbox,CheckboxGroup,Option,
  Breadcrumb,BreadcrumbItem,Carousel,CarouselItem,MenuItemGroup,Submenu,Form,FormItem,Header,Footer,Container,
  Aside,Main,Row,Col,RadioButton,Message} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './vuex/stores'
import axios from 'axios'
axios.interceptors.request.use((config) => {
  document.getElementsByClassName('loading')[0].style.display = 'block';
  return config
})
axios.interceptors.response.use((config) => {
  document.getElementsByClassName('loading')[0].style.display = 'none';
  return config
})
axios.defaults.baseURL = 'http://zhengjinwei.top:3003'

Vue.prototype.$message = Message

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Radio.name, Radio);
Vue.component(RadioButton.name, RadioButton);
Vue.component(Rate.name, Rate);
Vue.component(Alert.name, Alert);
Vue.component(Dialog.name, Dialog);
Vue.component(Checkbox.name, Checkbox);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Carousel.name, Carousel);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Input.name, Input);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Submenu.name, Submenu);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
});
