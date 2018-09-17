<template>
    <div class="formContainer">
        <div>
            <label for="inName">name</label>
            <input type="text" name="inName" v-model="inName" />
        </div>
        <div>
            <label for="inPass">password</label>
            <input type="password" name="inPass" v-model="inPass" />
        </div>
        <div>
            <button v-on:click="onSubmit">
                {{submitLbl}}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['submitLbl', 'submitCallback'],
    data: function() {
        return {
            inName: '', inPass: ''
        };
    },
    methods: {
        onSubmit: function() {
            this.submitCallback(this.inName, this.inPass);
        }
    }
}
</script>
<style scoped>
.formContainer {
    width: 300px;
}
.formContainer > div {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-content: stretch;
    margin-bottom: 8px;
}
label {
    padding-right: 8px;
}
input {
    width: 70%;
}
button {
    width: 100%;
}
</style>
