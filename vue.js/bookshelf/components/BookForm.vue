<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="title">제목</label>
            <input type="text" name="title" v-model="title">
            <button>등록</button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => {
        return {
            title: '',
        }
    },
    methods: {
        submitForm() {
            this.$emit('submit-form', this.title);
        },
    },
}
</script>

<style>
    form {padding: 10px; border: 3px dotted black;}
    label {padding: 0 10px;}
</style>