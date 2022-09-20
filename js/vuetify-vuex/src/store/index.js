import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        welcome1: '안녕하세요',
        welcome2: '유민상 입니다',
        welcome3: 'vuex 사용해봐요',
    },
    mutations: {
        welcome (state, payload) {
            Object.assign(state, payload)
        }
    },
    getters: {
        welcome2 (state) {
            return `getters 컴포넌트에서 welcome3을 일시적으로 렌더링 했습니다. welcome2는  '${state.welcome2}'`
        }
    }
})