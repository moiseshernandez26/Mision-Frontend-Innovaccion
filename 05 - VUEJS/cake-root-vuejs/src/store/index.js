import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      adornos: [
        {
          id: 1,
          price: '$10',
          image: "fresa.jpg",
          title: 'fresa'
        },
        {
          id: 2,
          price: '$10',
          image: "red.jpg",
          title: 'Red Valvet'
        },
        {
          id: 3,
          price: '$10',
          image: "chocolate.jpg",
          title: 'Chocolate'
        },
      ],
      pedidos: [],
      saboresChef: [
        {
          id: 1,
          name: "Chocolate",
          price: "10",
          unit: "Kg",
        },
        {
          id: 2,
          name: "Fresa",
          price: "40",
          unit: "Kg",
        },
        {
          id: 3,
          name: "Red Valvet",
          price: "100",
          unit: "Kg",
        }
      ],
      adornosChef: [
        {
          id: 1,
          name: "Dulces",
          price: "10",
          unit: "Kg",
        },
        {
          id: 2,
          name: "Naranjas",
          price: "40",
          unit: "Kg",
        },
        {
          id: 3,
          name: "Uvas",
          price: "100",
          unit: "Kg",
        }
      ]
    }
  },
  getters: {

  },
  mutations: {
    setPedidos: (state, pedidos) => {
      state.pedidos.push(pedidos)
    },
  },
  actions: {

  },
  modules: {
    
  },
})

export default store;