<template>
    <div class="headerContainer">
        <div class="left">
            <h1>shop</h1>
        </div>
        <div class="right">
            <p>{{logged}}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        logged() {
            const state = this.$store.getters.logged;
            return state === null ? 'no login' : state;
        }
    }
}
</script>
<style scoped>
.headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    border-bottom: 1px #666 solid;
}
.left {
    flex: 1 1 auto;
}
.right {
    flex: 1 1 auto;
    text-align: right;
}
</style>

