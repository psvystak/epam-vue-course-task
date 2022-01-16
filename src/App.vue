<template>
  <div class="main-wrapper">
    <router-view />
    <div class="movies-wrapper">
      <loader v-if="loading"></loader>
      <template v-else>
        <sort :movies-data="movies" class="sort-component" />
        <router-link v-for="movie in movies" :to="{ name: 'Descr', query: { id: movie.id }}" class="movie-item-component"
                     @click.native="scrollToTop">
          <movie-item :movie="movie" />
        </router-link>
      </template>
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

@Options({
  components: {
    Loader,
    MovieItem,
    Search,
    Sort
  },
  computed: {
    ...mapGetters(["movies", "loading"])
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
    await this.loadMovies();
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
  }
}

.search-component {
  border-bottom: 10px solid $gray-3;
}
</style>
