import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    client: [
        {
            "name": "Auchan",
            "address": "Here is Auchan",
            "city": "Villeneuve"
        },
        {
            "name": "E.Leclerc",
            "address": "Here is E.Leclerc",
            "city": "Lille"
        },
        {
            "name": "Carrefour",
            "address": "Here is Carefour",
            "city": "Arras"
        }
    ]
}

const getters= {
    client: (state => state.client)
}

const actions = {
    addClient: (store, name, address, city) => {
        store.commit('ADD_CLIENT', name, address, city)
    }
}

let store = new Vuex.Store({
    state: state,
    mutations: {
        ADD_CLIENT: (state, name, address, city) => {
            state.client.push({
                address: address,
                city: city,
                name: name,
            })
        }
    },
    getters: getters,
    actions: actions
})

global.store = store
export default store