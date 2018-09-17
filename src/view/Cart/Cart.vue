<template>
    <page-base>
        <h2>cart</h2>
        <ul>
            <template v-for="(item, index) in cart">
                <li :key="index">
                    <span>{{item.item.name}}</span>
                    <span> x </span>
                    <span>{{item.num}}</span>
                </li>
            </template>
        </ul>
        <p>total price:<span>{{total}}</span></p>
        <div>
            <button v-on:click="onPurchase" :disabled="disabled">purchase</button>
        </div>
        <div>
            <button v-on:click="onClear">clear</button>
        </div>
    </page-base>
</template>
<script>
import {put} from '../../func.js';
import {Base} from '../../component';
const dummyItem = {
    id: -1,
    name: 'dummy',
    description: 'dummy',
    price: 0,
    num: 0,
    category: null
};
export default {
    computed: {
        cart: function() {
            const list = {};
            const cart = this.$store.getters.cart;
            const items = this.$store.getters.items;
            cart.forEach((elm) => {
                if (list[elm] === void 0) {
                    const item = items.find((i) => i.id == elm) || dummyItem;
                    list[elm] = {num:1, item};
                } else {
                    list[elm].num += 1;
                }
            });
            return list;
        },
        total: function() {
            const cart = this.$store.getters.cart;
            const items = this.$store.getters.items;
            let price = 0;
            cart.forEach((elm) => {
                const item = items.find((i) => i.id == elm) || dummyItem;
                price += item.price;
            });
            return price;
        },
        disabled: function() {
            const logged = this.$store.getters.logged;
            return logged === null ? true : false;
        }
    },
    methods: {
        onPurchase: function() {
            const list = {};
            const cart = this.$store.getters.cart;
            const items = this.$store.getters.items;
            cart.forEach((elm) => {
                if (list[elm] === void 0) {
                    const item = items.find((i) => i.id == elm) || dummyItem;
                    list[elm] = {num:1, item};
                } else {
                    list[elm].num += 1;
                }
            });
            Object.keys(list).forEach((key) => {
                console.log(list[key]);
                list[key].item.num -= list[key].num;
                (async () => {
                    console.log(await put('/item', list[key].item));
                })();
            });
            alert('Purchase is complete');
        },
        onClear: function() {
            this.$store.dispatch('unsetCart');
        }
    },
    components: {
        'page-base': Base
    }
}
</script>
