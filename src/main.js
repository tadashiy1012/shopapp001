import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import VueRouter from 'vue-router';
import { Home, Register, Login, Category, Item, Cart } from './view';
import {state, mutations, getters, actions} from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/category/:category', component: Category },
    { path: '/item/:id', component: Item },
    { path: '/cart', component: Cart }
];

const app = new Vue({
    router: new VueRouter({routes}),
    store: new Store({state, mutations, getters, actions}),
    template: '<router-view />',
    created: function() {
        console.log('created!');
        const cart = sessionStorage.getItem('cart');
        const ids = cart !== null ? cart.split(',') : []
        ids.forEach((id) => {
            this.$store.dispatch('setCart', parseInt(id));
        });
    }
}).$mount('#app');

console.log(app);