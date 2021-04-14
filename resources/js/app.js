
require('./bootstrap');

//window.Vue = require('vue');
import Vue from 'vue'


 import App from './vue/app.vue'
 import router from './router'
 //import navigation from '../components/Navigation'

 import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    router,
    components: {App},
    template:'<App/>'
});
