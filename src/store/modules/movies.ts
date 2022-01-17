// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import axios from "axios";
import { Module } from "vuex";

const moviesModule: Module<any, any> = {
  state: {
    movies: [],
    loading: true,
    searchQuery: false,
    searchData: ""
  },
  actions: {
    async loadMovies({ commit }) {
      try {
        const res = await axios.get("https://api.npoint.io/4789acb5721401bcdfad");
        const moviesData = await res.data;
        commit("setMovies", moviesData);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    movies: state => {
      return state.movies;
    },
    searchQuery: state => {
      return state.searchQuery;
    },
    loading: state => {
      return state.loading;
    },
    searchData: state => {
      return state.searchData;
    }
  },
  mutations: {
    isLoading(state) {
      state.loading = true;
    },
    isLoaded(state) {
      state.loading = false;
    },
    enableSearchQuery(state) {
      state.searchQuery = true;
    },
    disableSearchQuery(state) {
      state.searchQuery = false;
    },
    setSearchData(state, data) {
      state.searchData = data;
    },
    setMovies(state, movies) {
      state.movies = movies;
    }
  }
};

export default moviesModule;