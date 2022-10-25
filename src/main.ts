import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faHatWizard, faUser,faBookOpenReader,faBookOpen, faScroll,faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faHatWizard, faUser, faBook,faBookOpenReader,faBookOpen, faScroll,faLocationCrosshairs)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
