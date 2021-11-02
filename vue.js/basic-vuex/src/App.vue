<template>
    <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
        Vuex 연습장
    </v-app-bar>
    <v-main>
        <StateComponent />
        <MutationComponent />
        <GetterComponent />
        <v-divider></v-divider>
    </v-main>
  </v-app>
</template>

<script>
import StateComponent from '@/components/StateComponent.vue'
import MutationComponent from '@/components/MutationComponent.vue'
import GetterComponent from '@/components/GetterComponent.vue'
export default {
    name: 'App',
    components: {
        StateComponent,
        MutationComponent,
        GetterComponent,
    },
    data: () => ({
        //
    }),
};
</script>
