import RootState from "@/store/state";
import State from "./state";
import { ActionTree } from "vuex";
import { sendRequest } from "@/util";

const actions: ActionTree<State, RootState> = {
  login: async ({ rootGetters: { mapApi } }, data) => {
    localStorage.token = await sendRequest(mapApi("user/login"), "post", data);
  }
};

export default actions;
