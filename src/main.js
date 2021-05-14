import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import AOS from 'aos';
import { ObserveVisibility } from "vue-observe-visibility";
import { init } from 'emailjs-com';

Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueScrollTo);
Vue.use(VueParticles)
library.add(faInstagram, faFacebook, faWhatsapp);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// TODO: add EmailJS id here
init("user_5lb8eHv64C9LhhI5H6oMb");

Vue.directive("observe-visibility", ObserveVisibility);

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
