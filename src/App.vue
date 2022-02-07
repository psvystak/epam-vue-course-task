<template>
  <div class="main-wrapper">
    <template v-if="movies.length || searchQuery">
      <loader v-if="loading" class="search-loader"></loader>
      <router-view v-else />
    </template>
    <div class="movies-wrapper">
      <div v-if="searchQuery" class="search-query">
        <div>There are no movies for query "{{ searchData }}"</div>
        <router-link class="back-to-movies" to="/" @click.native="backToAllMovies">back to the list</router-link>
      </div>
      <template v-else-if="movies.length">
        <sort :movies-data="movies" class="sort-component" />
        <router-link v-for="movie in movies" :to="{ name: 'Descr', query: { id: movie.id }}"
                     class="movie-item-component"
                     @click.native="scrollToTop">
          <details-dropdown :id="movie.id" class="details-dropdown"></details-dropdown>
          <movie-item :movie="movie" />
        </router-link>
      </template>
      <loader v-else></loader>
    </div>
    <movie-popup v-if="moviePopup"></movie-popup>
    <transition name="fade">
      <div v-if="moviePopup" class="popup-backdrop"></div>
    </transition>
    <div class="footer">
      <router-link class="logo" to="/">
        <p><b>netflix</b>roulette</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Loader from "./components/Loader/index.vue";
import MovieItem from "./components/MovieItem/index.vue";
import Search from "./components/Search/index.vue";
import Sort from "./components/Sort/index.vue";
import DetailsDropdown from "./components/DetailsDropdown/index.vue";
import MoviePopup from "./components/MoviePopup/index.vue";

@Options({
  data() {
    return {
      localMovies: {}
    };
  },
  components: {
    Loader,
    MovieItem,
    Search,
    Sort,
    DetailsDropdown,
    MoviePopup
  },
  computed: {
    ...mapGetters(["movies", "loading", "searchQuery", "searchData", "moviePopup"])
  },
  methods: {
    ...mapActions(["loadMovies"]),
    ...mapMutations(["setMovies", "disableSearchQuery", "setSearchData"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    backToAllMovies() {
      this.setSearchData("");
      this.disableSearchQuery();
      this.setMovies(this.localMovies);
    }
  },
  async mounted() {
    await this.loadMovies();
    this.localMovies = this.movies;
  }
})

export default class App extends Vue {

}
</script>

<style lang="scss">
@import "assets/scss/variables";

.search-loader {
  height: 606px !important;
  width: 100% !important;
  top: 50%;
}

#app {
  background: $gray-3;
}

#app > .main-wrapper {
  position: relative;
  width: 1200px;
  margin: auto;
}

.search-query {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  * {
    color: white;
  }

  .back-to-movies {
    display: block;
    margin-top: 20px;
  }
}

.details-dropdown {
  position: absolute !important;
  top: 11px;
  right: 16px;
}

.movies-wrapper {
  position: relative;
  background: $black;
  padding: 16px 0 50px 59px;
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 230px;

  .loadingio-spinner-rolling-cartjbdsc7q {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .sort-component {
    margin-bottom: 35px;
  }

  .movie-item-component {
    margin: 43px 57px 0 0;
    position: relative;

    &:hover .open-button {
      opacity: 1;
    }
  }
}

.search-component {
  border-bottom: 10px solid $gray-3;
}

.footer {
  background-color: $dark-gray;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.popup-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 70.39px);
  background: $black-opacity;
  backdrop-filter: blur(2px);
}
</style>
