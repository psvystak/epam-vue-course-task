// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import axios from "axios";
import { Module } from "vuex";

const moviesModule: Module<any, any> = {
  state: {
    movies: [],
    loading: true,
    searchQuery: false,
    searchData: "",
    moviePopup: false,
    editId: 0,
    currentMovie: {},
    editMode: false,
    deleteMode: false,
    cachedGenres: []
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
    cachedGenres: state => {
      return state.cachedGenres;
    },
    editId: state => {
      return state.editId;
    },
    searchQuery: state => {
      return state.searchQuery;
    },
    loading: state => {
      return state.loading;
    },
    searchData: state => {
      return state.searchData;
    },
    moviePopup: state => {
      return state.moviePopup;
    },
    editMode: state => {
      return state.editMode;
    },
    deleteMode: state => {
      return state.deleteMode;
    },
    currentMovie: state => {
      return state.currentMovie;
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
    setCachedGenres(state, data) {
      state.cachedGenres = data;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    setEditId(state, id) {
      state.editId = id;
    },
    openPopup(state, currentMovie) {
      state.moviePopup = true;
      state.currentMovie = currentMovie;
    },
    closePopup(state) {
      state.moviePopup = false;
    },
    setEditMode(state) {
      state.editMode = true;
    },
    setDeleteMode(state) {
      state.deleteMode = true;
    },
    setAddMode(state) {
      state.editMode = false;
    },
  }
};

export default moviesModule;