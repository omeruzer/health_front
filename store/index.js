import Vuex from 'vuex';
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    state: {
      name: 'sddsf'
    }
  });
};

export default createStore
