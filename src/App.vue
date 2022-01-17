<template>
  <div class="main-wrapper">
    <loader v-if="getLoading"></loader>
    <router-view v-else />
    <div class="movies-wrapper">
      <sort :movies-data="movies" class="sort-component" />
      <router-link v-for="movie in movies" :to="{ name: 'Descr', query: { id: movie.id }}"
                   class="movie-item-component"
                   @click.native="scrollToTop">
        <details-dropdown class="details-dropdown"></details-dropdown>
        <movie-item :movie="movie" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";
import Loader from "./components/Loader/index.vue";
import MovieItem from "./components/MovieItem/index.vue";
import Search from "./components/Search/index.vue";
import Sort from "./components/Sort/index.vue";
import DetailsDropdown from "./components/DetailsDropdown/index.vue";

@Options({
  components: {
    Loader,
    MovieItem,
    Search,
    Sort,
    DetailsDropdown
  },
  computed: {
    ...mapGetters(["movies", "getLoading"])
  },
  methods: {
    ...mapActions(["loadMovies"]),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  async mounted() {
    console.log(this.getLoading);
    await this.loadMovies();
    console.log(this.getLoading);
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import "assets/scss/variables";

#app {
  background: $gray-3;
}

#app > .main-wrapper {
  width: 1200px;
  margin: auto;
}

.details-dropdown {
  position: absolute !important;
  top: 11px;
  right: 16px;
  opacity: 0;
}

.movies-wrapper {
  position: relative;
  background: $black;
  padding: 16px 0 50px 59px;
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;

  .sort-component {
    margin-bottom: 35px;
  }

  .movie-item-component {
    margin: 43px 57px 0 0;
    position: relative;

    &:hover .details-dropdown {
      opacity: 1;
    }
  }
}

.search-component {
  border-bottom: 10px solid $gray-3;
}
</style>
