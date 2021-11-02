<template>
    <v-container fluid>
        # state
        <v-alert text type="info">{{ $store.state.welcome1 }}</v-alert>
        <v-alert text type="info">{{ $store.state.welcome2 }}</v-alert>
        <v-alert text type="info">{{ $store.state.welcome3 }}</v-alert>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        //
    })
}
</script>