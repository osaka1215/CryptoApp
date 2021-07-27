import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyBkAUqwVa1qThZEfo5oQp8Gtu4sM-wO-10",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          commit('updateIdToken', response.data.idToken);
          console.log(response);
          router.replace({ name: "List" });
        });
    },
    register({ commit }, authData) {
      axios
        .post(
          "/accounts:signUp?key=AIzaSyBkAUqwVa1qThZEfo5oQp8Gtu4sM-wO-10",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          commit('updateIdToken', response.data.idToken);
          console.log(response);
          router.replace({ name: "List" });
        });
    }
  },
  modules: {
  }
})
