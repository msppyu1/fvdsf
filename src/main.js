import Vue from 'vue'


import app from './app.vue'


import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

//import 'bootstrap/dist/css/bootstrap.css'

import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
   
})