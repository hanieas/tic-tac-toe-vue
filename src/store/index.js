import { createStore } from "vuex";

import game from "./modules/game";

const store = createStore({
  modules: {
    game,
  },
});

export default store;
