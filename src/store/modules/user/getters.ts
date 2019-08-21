import RootState from "@/store/state";
import State from "./state";
import { GetterTree } from "vuex";

const getters: GetterTree<State, RootState> = {
  login: () => `user/login`
};

export default getters;
