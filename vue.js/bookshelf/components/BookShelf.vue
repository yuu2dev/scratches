<template>
    <ul v-if="books.length > 0">
        <li v-for="book in books" 
            :key="book.id"
        >
            {{ book.title }}
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        books: {
            type: Array,
            required: true,
        }
    },
    data: () => {
        return {
            
        } 
    },
    methods: {

    }, 
}
</script>