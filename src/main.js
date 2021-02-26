import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import AOS from 'aos';
import { ObserveVisibility } from "vue-observe-visibility";

Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueScrollTo);
Vue.use(VueParticles)
library.add(faInstagram, faFacebook, faWhatsapp);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.directive("observe-visibility", ObserveVisibility);

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
