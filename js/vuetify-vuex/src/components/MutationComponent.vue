<template>
    <v-container fluid>
        # mutations
        <v-alert text type="info">{{ $store.state.welcome1 }}</v-alert>
        <v-alert text type="info">{{ $store.state.welcome2 }}</v-alert>
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
    methods: {
        
        welcome () {
            const welcome1 = 'mutations 컴포넌트에서 welcome1 데이터를 진짜 교체 했습니다.'
            // 전역적으로 공유하고 있는 welcome1 이 처음뵙겠습니다 로 바뀐다.
            // this.$store.commit('welcome', { welcome1 })
            this.$store.commit({ type: 'welcome', welcome1 })
        }
    }
}
</script>