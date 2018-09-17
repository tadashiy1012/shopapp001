<template>
    <div class="rootContainer">
        <Header />
        <div class="container">
            <div class="left">
                <navi />
            </div>
            <div class="right">
                <slot></slot>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import { Header, Footer, Navi } from './';
export default {
    components: {
        Header, Footer, Navi
    },
    mounted: function() {
        console.log('mounted!');
        this.$store.dispatch('setLogged');
        this.$store.dispatch('setItems');
    }
}
</script>
<style scoped>
.rootContainer {
    width: 90%;
    margin: 0 auto;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.left {
    flex: 1 1 auto;
    width: 220px;
}
.right {
    flex: 1 1 auto;
    width: 100%;
    padding-left: 12px;
}
</style>
