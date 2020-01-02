import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.use('fromNow', value => moment(value).fromNow());

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router, VueRouter,
    components: {
        Index
    }
});
