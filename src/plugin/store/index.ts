import { createStore } from 'vuex'
import getters from './modules/getters';


const store = createStore({
  modules: {
      getters:getters,
  },
})

export default store
