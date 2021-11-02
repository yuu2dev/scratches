<template>
    <v-container fluid>
        # getters
        <v-alert text type="info">{{ $store.state.welcome1 }}</v-alert>
        <v-alert text type="info">{{ welcome2 }}</v-alert>
        <v-alert text type="info">{{ $store.state.welcome3 }}</v-alert>
    </v-container>
</template>
<script>
export default {
    data: () => ({
    }),
    beforeMount() {
        this.welcome()
    },
    computed: {
        welcome2 () {
            return this.$store.getters.welcome2
        }
    }
}
</script>