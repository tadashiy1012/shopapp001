<template>
    <page-base>
        <h2>register</h2>
        <id-form submit-lbl="register" :submit-callback="onRegister" />
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
        onRegister: function(name, pass) {
            const body = {name: name, password: pass};
            (async () => {
                const result = await post('/register', body);
                console.log(result);
                if (result[0] === 'ok') {
                    alert('registration success!');
                } else {
                    alert('registration failed!');
                }
            })();
        }
    }
}
</script>
