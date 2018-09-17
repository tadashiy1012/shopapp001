<template>
    <page-base>
        <h2>login</h2>
        <id-form submit-lbl="login" :submit-callback="onLogin" />
        <button v-on:click="onLogout">logout</button>
    </page-base>
</template>
<script>
import {post} from '../../func.js';
import {Base, IdForm} from '../../component';
export default {
    components: {
        'page-base': Base,
        IdForm
    },
    methods: {
        onLogin: function(name, pass) {
            const body = {name: name, password: pass};
            (async () => {
                const result = await post('/login', body);
                console.log(result);
                if (result[0] === 'ok') {
                    this.$router.push('/');
                } else {
                    alert('login failed!');
                }
            })();
        },
        onLogout: function() {
            (async () => {
                const result = await post('/logout', {});
                console.log(result);
                this.$router.push('/');
            })();
        }
    }
}
</script>
