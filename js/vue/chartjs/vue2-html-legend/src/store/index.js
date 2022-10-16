import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        datasets: [
            {
                label: (new Date).getTime(),
                data: [
                    { x: '2022-10-11', y: 40 },
                    { x: '2022-10-12', y: 45 }, 
                    { x: '2022-10-13', y: 30 }, 
                    { x: '2022-10-14', y: 55 }, 
                    { x: '2022-10-15', y: 60 },   
                    { x: '2022-10-16', y: 80 }
                ]
            }
        ]
    },
    getters: {
        getDatasets (state) {
            return state.datasets
        }
    },
    mutations: {
        addDataset (state, payload) {
            state.datasets.push(payload)
        }
    },
    actions: {
        unitTest001 (context) {
            setTimeout(() => {
                context.commit('addDataset', {
                    label: (new Date).getTime(),
                    data: [
                        { x: '2022-10-11', y: 80 },
                        { x: '2022-10-12', y: 65 }, 
                        { x: '2022-10-13', y: 40 }, 
                        { x: '2022-10-14', y: 65 }, 
                        { x: '2022-10-15', y: 90 },   
                        { x: '2022-10-16', y: 100 }
                    ]
                })
            }, 1000)
            setTimeout(() => {
                context.commit('addDataset', {
                    label: (new Date).getTime(),
                    data: [
                        { x: '2022-10-11', y: 60 },
                        { x: '2022-10-12', y: 55 }, 
                        { x: '2022-10-13', y: 70 }, 
                        { x: '2022-10-14', y: 15 }, 
                        { x: '2022-10-15', y: 40 },   
                        { x: '2022-10-16', y: 30 }
                    ]
                })
            }, 2000)
        }
    }
})
