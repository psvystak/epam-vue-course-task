// store.ts
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
// eslint-disable-next-line import/no-unresolved
import moviesModule from "@/store/modules/movies";

// define your typings for the store state
export interface State {
  movies: object[];
  searchQuery: boolean;
  loading: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    movies: [],
    searchQuery: false,
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {
    moviesModule
  }
});