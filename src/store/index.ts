import { createStore } from 'vue';
import state from './State';
import mutations from './Mutations';
import actions from './Actions';
import getters from './Getters';

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store;
