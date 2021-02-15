import { createStore } from 'vuex'

const store = createStore({
    state: {
        gold: 250,
        silver: 150,
        copper: 300
    },
    mutations: {
        increment(state, {resource, val}) {
            if( resource === 'gold') {
                state.gold += val
              } else if ( resource === 'silver') {
                state.silver += val
              } else if ( resource === 'copper') {
                state.copper += val
              }
        }
    },
    getters: {
        getGold(state) {
            return state.gold
        },
        getSilver(state) {
            return state.silver
        },
        getCopper(state) {
            return state.copper
        },
    }
})
export default store;