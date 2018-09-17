<template>
    <page-base>
        <h2>category:<span>{{category}}</span></h2>
        <ul>
            <template v-for="item in items">
                <li v-bind:key="item.id">
                    <thumb :item-id="item.id" :title=item.name :image=item.image />
                </li>
            </template>
        </ul>
    </page-base>
</template>
<script>
import {Base, Thumb} from '../../component';
export default {
    computed: {
        category: function() {
            return this.$route.params.category
        },
        items: function() {
            const category = this.$route.params.category;
            const all = this.$store.getters.items;
            const items = all.filter((item) => item.category === category);
            console.log(items);
            return items;
        }
    },
    components: {
        'page-base': Base,
        Thumb
    }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
li {
    margin: 12px;
}
</style>
