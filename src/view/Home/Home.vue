<template>
    <page-base>
        <h2>home</h2>
        <News />
        <new-item />
    </page-base>
</template>
<script>
import {Base} from '../../component';
import News from './News.vue';
import NewItem from './NewItem.vue';
export default {
    components: {
        'page-base': Base,
        News, NewItem
    }
}
</script>
