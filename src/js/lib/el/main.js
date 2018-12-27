/**
 * Created by Veket on 2018/12/7.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index';
import Axios from 'axios'

global.Vue = window.Vue = Vue;
global.Axios = window.Axios =Axios;
global.Bus = window.Bus = new Vue();

export default {
  initElement(i18n){
    let cfg = {};
    if(i18n){
        cfg = { size:'medium', i18n:(key,value) => i18n.t(key, value) }
    }else{
        cfg = { size:'medium'}
    }
    Vue.use(ElementUI,cfg);
  }
}