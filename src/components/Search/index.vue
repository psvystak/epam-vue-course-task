<template>
  <div class="search-wrapper">
    <add-movie></add-movie>
    <router-link class="logo" to="/">
      <p><b>netflix</b>roulette</p>
    </router-link>
    <label for="search">FIND YOUR MOVIE</label>
    <div class="search-inputs">
      <input id="search" v-model="searchDataLocal" placeholder="What do you want to watch?" type="text"
             @keyup.enter="searchMovie" />
      <button @click="searchMovie">SEARCH</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import AddMovie from "../AddMovie/index.vue";

const Search = defineComponent({
  data() {
    return {
      searchDataLocal: ""
    };
  },
  components: {
    AddMovie
  },
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapMutations(["setMovies", "enableSearchQuery", "setSearchData"]),
    searchMovie() {
      this.setSearchData(this.searchDataLocal);
      if (this.searchDataLocal.length) {
        // @ts-ignore
        this.setMovies(this.movies.filter((item) => item.title.toLowerCase().includes(this.searchDataLocal.toLowerCase())));
        if (!this.movies.length) {
          this.enableSearchQuery();
        }
      } else {
        this.setMovies(this.movies);
      }
    }
  }
});

export default Search;
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.search-wrapper {
  position: relative;
  background: url("assets/search-bg.jpg") no-repeat center/contain;
  width: 1200px;
  height: 396px;
  font-weight: 500;
  padding: 110px 120px 0 123px;

  .add-button {
    position: absolute;
    top: 20px;
    right: 56px;
  }

  .logo {
    position: absolute;
    top: 18px;
    left: 59px;
    z-index: 1;
  }

  label {
    color: $white;
    font-weight: 300;
    font-size: 41px;
  }

  .search-inputs {
    width: 100%;
    margin-top: 37px;
    display: flex;
    justify-content: space-between;

    input {
      font-size: 23px;
      padding-left: 10px;
      letter-spacing: 0.2px;
      background: $input-bg;
      caret-color: $white;
      color: $white;
      border: none;
      border-radius: 3px;
      width: 710px;
      height: 58px;
    }

    button {
      color: white;
      background: #F65261;
      width: 233px;
      height: 57px;
      border-radius: 3px;
      font-size: 21px;
      user-select: none;
      cursor: pointer;
      transition: 0.05s linear box-shadow;

      &:active {
        box-shadow: inset 1px 1px 10px #333;
      }
    }
  }
}
</style>
