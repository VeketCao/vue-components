/**
 * Created by Veket on 2017/9/19.
 */
import '../../css/base'
import EL from '../lib/el/main'
import App from '../pages/App.vue'

EL.initElement();

new Vue({
  render: h => h(App)
}).$mount('#app')

