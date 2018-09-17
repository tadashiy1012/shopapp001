import {get, post} from './func';

const state = {
    logged: null,
    items: [],
    latest: [],
    cart: []
};

const mutations = {
    setLogged: (state, payload) => {
        state.logged = payload.logged;
    },
    setItems: (state, payload) => {
        state.items = payload.items;
    },
    setLatest: (state, payload) => {
        state.latest = payload.latest;
    },
    setCart: (state, payload) => {
        state.cart = [...state.cart, payload.itemId];
    },
    unsetCart: (state) => {
        state.cart = [];
    }
};

const getters = {
    logged: state => state.logged,
    items: state => state.items,
    latest: state => state.latest,
    cart: state => state.cart
};

const actions = {
    setLogged: async ({ commit }) => {
        const result = await get('/login');
        commit('setLogged', {logged: result[2].name});
    },
    setItems: async ({ commit }) => {
        const result = await get('/item');
        commit('setItems', {items: result});
        commit('setLatest', {latest: result.reverse().slice(0, 5)});
        return true;
    },
    setCart: ({commit, state}, itemId) => {
        commit('setCart', {itemId});
        sessionStorage.setItem('cart', state.cart);
    },
    unsetCart: ({commit}) => {
        commit('unsetCart');
        sessionStorage.removeItem('cart');
    }
};

export {
    state, mutations, getters, actions
};