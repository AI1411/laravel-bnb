import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";
import StarRating from "./shared/components/StarRating";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.use('fromNow', value => moment(value).fromNow());

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('star-rating', StarRating);

const app = new Vue({
    el: '#app',
    router, VueRouter,
    components: {
        Index
    }
});
