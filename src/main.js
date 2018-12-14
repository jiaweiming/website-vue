// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vue from 'vue'
import {Button,Select,Input,Menu,MenuItem,Option,Breadcrumb,BreadcrumbItem,Carousel,CarouselItem,MenuItemGroup,Submenu,Form,FormItem,Header,Footer,Container,Aside,Main,Row,Col} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './vuex/stores'

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
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
  template: '<App/>'
});
