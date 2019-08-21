import State from "./state";
import { ActionTree } from "vuex";

const actions: ActionTree<State, State> = {
  toggleDrawer: ({ state: { drawer }, commit }) => commit("setDrawer", !drawer)
};

export default actions;
