<template>
    <div>
        <router-link :to="'/item/' + itemId">
            <span>
                <img v-bind:src="image" alt="item_image" />
            </span>
            <span>
                <p>{{title}}</p>
            </span>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['title', 'image', 'itemId']
}
</script>
<style scoped>
img {
    width: 100px;
    height: auto;
    border: 1px #666 solid;
}
p {
    font-size: 11px;
    margin-top: 0px;
    width: 100px;
}
</style>
