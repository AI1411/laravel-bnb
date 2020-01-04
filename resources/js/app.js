import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";
import Vuex from 'vuex';
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";
import ValidationErrors from "./shared/components/ValidationErrors";
import Success from "./shared/components/Success";
import storeDefinition from "./store";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use('fromNow', value => moment(value).fromNow());

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('star-rating', StarRating);
Vue.component('fatal-error', FatalError);
Vue.component('v-errors', ValidationErrors);
Vue.component('success', Success);

const store = new Vuex.Store(storeDefinition);

const app = new Vue({
    el: '#app',
    store,
    router, VueRouter,
    components: {
        Index
    },
    beforeCreate() {
        this.$store.dispatch('loadStoredState');
    }
});
