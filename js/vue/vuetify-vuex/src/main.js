import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'

const app = new Vue({
    store,
    vuetify,
    render: h => h(App)
})
app.$mount('#app')
