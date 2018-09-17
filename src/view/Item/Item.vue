<template>
    <page-base>
        <h2>item:#<span>{{item.id}}</span></h2>
        <h3>{{item.name}}</h3>
        <img :src="item.image" alt="itemimage" />
        <p>{{item.description}}</p>
        <p>price:{{item.price}}</p>
        <p>stock:{{item.num}}</p>
        <div>
            <button v-on:click="addCart" :disabled="disabled">add to cart</button>
        </div>
        <br />
    </page-base>
</template>
<script>
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
    components: {
        'page-base': Base
    },
    computed: {
        item: function() {
            let item = null;
            const tgtId = this.$route.params.id;
            if (this.$store.getters.items.length === 0) {
                this.$store.dispatch('setItems');
                item = dummyItem;
            } else {
                const items = this.$store.getters.items;
                item = items.find((elm) => elm.id == tgtId);
            }
            console.log(tgtId, item);
            return item;
        },
        disabled: function() {
            let item = null;
            const tgtId = this.$route.params.id;
            if (this.$store.getters.items.length === 0) {
                this.$store.dispatch('setItems');
                item = dummyItem;
            } else {
                const items = this.$store.getters.items;
                item = items.find((elm) => elm.id == tgtId);
            }
            return item.num === 0 ? true : false;
        }
    },
    methods: {
        addCart: function() {
            this.$store.dispatch('setCart', this.item.id);
            alert('Item has been added to the cart');
        }
    }
}
</script>
<style>
img {
    border: 1px #666 solid;
}
</style>
