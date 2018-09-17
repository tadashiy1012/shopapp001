<template>
    <div>
        <h3>new products</h3>
        <ul>
            <template v-for="item in items">
                <li v-bind:key="item.id">
                    <thumb :item-id="item.id" :title=item.name :image=item.image />
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
import { Thumb } from '../../component';
export default {
    computed: {
        items: function() {
            return this.$store.state.latest
        }
    },
    components: {
        Thumb
    }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    padding-left: 0px;
}
</style>
