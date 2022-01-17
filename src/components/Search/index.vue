<template>
  <div class="search-wrapper">
    <label for="search">FIND YOUR MOVIE</label>
    <div class="search-inputs">
      <input type="text" @keyup.enter="searchMovie" v-model="searchData" id="search" placeholder="What do you want to watch?" />
      <button @click="searchMovie">SEARCH</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

const Search = defineComponent({
  data() {
    return {
      searchData: ""
    };
  },
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapMutations(["getMovies"]),
    searchMovie() {
      if (this.searchData.length) {
        // @ts-ignore
        this.getMovies(this.movies.filter((item)=>item.title.toLowerCase().includes(this.searchData.toLowerCase())));
      }
      else {
        this.getMovies(this.movies);
      }
    }
  },
});

export default Search;
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.search-wrapper {
  background: url("assets/search-bg.jpg") no-repeat center/contain;
  width: 1200px;
  height: 410px;
  font-weight: 500;
  padding: 110px 120px 0 123px;

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
