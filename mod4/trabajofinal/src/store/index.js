import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 30,
    edit: false,
    currentItem: {},
    items: [
      {
        id: 1,
        name: "Apple",
        amount: 10,
        price: 100,
        category: "fruits"
      },
      {
        id: 2,
        name: "Orange",
        amount: 30,
        price: 200,
        category: "fruits"
      },
      {
        id: 3,
        name: "Chocolate",
        amount: 15,
        price: 500,
        category: "treats"
      },
      {
        id: 4,
        name: "Cookies",
        amount: 8,
        price: 400,
        category: "treats"
      },
      {
        id: 5,
        name: "Ice cream",
        amount: 20,
        price: 450,
        category: "treats"
      },
      {
        id: 6,
        name: "Cheesecake",
        amount: 30,
        price: 600,
        category: "treats"
      },
      {
        id: 7,
        name: "Apple Pie",
        amount: 50,
        price: 600,
        category: "treats"
      },
      {
        id: 8,
        name: "Walnut Pie",
        amount: 50,
        price: 650,
        category: "treats"
      },
      {
        id: 9,
        name: "Peach",
        amount: 24,
        price: 150,
        category: "fruits"
      },
      {
        id: 10,
        name: "Banana",
        amount: 30,
        price: 20,
        category: "fruits"
      },
      {
        id: 11,
        name: "Grapes",
        amount: 40,
        price: 30,
        category: "fruits"
      },
      {
        id: 12,
        name: "Watermelon",
        amount: 40,
        price: 80,
        category: "fruits"
      },
      {
        id: 13,
        name: "Ristretto",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 14,
        name: "Americano",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 15,
        name: "Capuccino",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 16,
        name: "Latte",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 17,
        name: "Macchiato",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 18,
        name: "Cortado",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 19,
        name: "Mocha",
        amount: 20,
        price: 20,
        category: "drinks"
      },
      {
        id: 20,
        name: "Popcorn",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 21,
        name: "Potato Chips",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 22,
        name: "Apple Chips",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 23,
        name: "Nachos",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 24,
        name: "Spiced Peanuts",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 25,
        name: "Pistachios",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 26,
        name: "Sea Salt Peanuts",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 27,
        name: "Pretzels",
        amount: 20,
        price: 30,
        category: "snacks"
      },
      {
        id: 28,
        name: "Pepsi",
        amount: 100,
        price: 10,
        category: "soda pop"
      },
      {
        id: 29,
        name: "Pepsi Zero",
        amount: 100,
        price: 10,
        category: "soda pop"
      },
      {
        id: 30,
        name: "Pepsi Diet",
        amount: 100,
        price: 10,
        category: "soda pop"
      }
    ]
  },
  mutations: {
    SET_ITEM(state, el) {
      if (!state.edit) {
        // Agregamos un nuevo producto.
        state.items.push({ id: state.id + 1, ...el });
        state.id += 1;
      } else {
        // Editamos un producto existente.
        state.items.map(item => {
          if (item.id === el.id) {
            item.name = el.name;
            item.amount = el.amount;
            item.price = el.price;
            item.category = el.category;
            // Avisamos que ya no se esta editando un producto.
            state.edit = false;
            state.currentItem = {
              name: null,
              amount: null,
              price: null,
              category: null
            };
          }
        });
      }
    },
    EDIT_ITEM(state, el) {
      state.edit = true;
      state.currentItem = el;
    },
    DELETE_ITEM(state, el) {
      state.items = state.items.filter(item => item.id != el.id);
    }
  },

  actions: {},
  modules: {}
});
