// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import moviesData from "./movies.json";
import { Module } from "vuex";

const moviesModule: Module<any, any> = {
  state: {
    movies: [],
    loading: true
  },
  actions: {
    async loadMovies({ commit }) {
      try {
        commit("getMovies", moviesData);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    movies: state => {
      return state.movies;
    },
    getLoading: state => {
      return state.loading;
    }
  },
  mutations: {
    loading(state) {
      state.loading = true;
    },
    loaded(state) {
      state.loading = false;
    },
    getMovies(state, movies) {
      state.movies = movies;
    },
  }
};

export default moviesModule;