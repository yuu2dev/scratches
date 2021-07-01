<template>
    <section>
        <header>{{ headerTitle }}</header>
        <book-shelf :books="books"></book-shelf>
        <book-form @submit-form="submitForm"></book-form>
        <footer></footer>
    </section>    
</template>

<script>
    import BookShelf from './components/BookShelf.vue';
    import BookForm  from './components/BookForm.vue';
    
    export default {

        components: {
            'book-shelf': BookShelf,
            'book-form' : BookForm,
        },
        data: () => {
            return {
                headerTitle: '나의서재',
                books: [
                    {
                        id: 0,
                        title: '손자병법',
                    }
                ],
            }
        },
        methods: {
            submitForm(title) {
                this.books.push({
                    id: this.books.length,
                    title,
                });
            }
        },
    }
</script>

<style>
    * {margin: 0 auto;}
    header {padding: 10px; background-color: skyblue;}
    footer {padding: 10px; margin-top: 20px;height: 50px; background-color: silver;}
</style>