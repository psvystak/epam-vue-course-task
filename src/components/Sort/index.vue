<template>
  <div class="main-wrapper">
    <div class="genres-wrapper">
      <p :class="{'active': this.activeGenre === 'all'}" @click="showAll">All</p>
      <p v-for="genre in genres" :key="genre" :class="{'active': activeGenre === genre}" @click="sortByGenre(genre)">
        {{ genre }}</p>
    </div>
    <div class="sort-wrapper">
      <p class="sort">SORT BY</p>
      <p :class="{'active': sortActive}" class="release" @click="sortByRelease">RELEASE DATE</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import img1 from "./assets/img2.jpg";
import img2 from "./assets/img3.jpg";
import { mapMutations, mapGetters } from "vuex";

const Sort = defineComponent({
  props: {
    moviesData: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            poster_path: img1,
            title: "Pulp Fiction",
            genres: [
              "Documentary"
            ],
            release_date: "2020-12-12",
            vote_count: 8.9,
            overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
          },
          {
            id: 2,
            poster_path: img2,
            title: "Pulp Fiction 2",
            genres: [
              "Comedy"
            ],
            release_date: "2009-12-12",
            vote_count: 7,
            overview: "Jules Winnfield (Samuel L. Jackson)"
          },
          {
            id: 3,
            poster_path: img2,
            title: "Some horror",
            genres: [
              "Horror"
            ],
            release_date: "2002-12-12",
            vote_count: 3,
            overview: "Horror"
          },
          {
            id: 4,
            poster_path: img2,
            title: "Some crime film",
            genres: [
              "Crime"
            ],
            release_date: "2003-12-12",
            vote_count: 3,
            overview: "Crime"
          },
          {
            id: 5,
            poster_path: img2,
            title: "Some crime film",
            genres: [
              "Crime"
            ],
            release_date: "2002-12-12",
            vote_count: 3,
            overview: "Crime"
          },
          {
            id: 6,
            poster_path: img2,
            title: "Some crime film",
            genres: [
              "Crime"
            ],
            release_date: "2001-12-12",
            vote_count: 3,
            overview: "Crime"
          }
        ];
      }
    },
    emptyArray: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      genres: this.emptyArray,
      localData: this.emptyArray,
      filteredData: this.emptyArray,
      activeGenre: "all",
      sortActive: false,
      img1,
      img2
    };
  },
  computed: {
    ...mapGetters(["movies", "searchQuery"])
  },
  watch: {
    moviesData: {
      deep: true,
      handler() {
        // @ts-ignore
        this.genres = this.localData.map((movie) => movie.genres).flat().filter((genre, index, genres) => genres.indexOf(genre) === index);
        this.sortMovies();
      }
    }
  },
  methods: {
    ...mapMutations(["setMovies", "disableSearchQuery"]),
    showAll() {
      this.filteredData = this.localData;
      this.activeGenre = "all";
      this.sortMovies();
      this.setMovies(this.filteredData);
    },
    sortByGenre(genre: string) {
      this.activeGenre = genre;
      this.sortMovies();
      // @ts-ignore
      this.filteredData = this.localData.filter((item) => item.genres.includes(genre));
      this.setMovies(this.filteredData);
    },
    sortByRelease() {
      this.sortActive = !this.sortActive;
      this.sortMovies();
      this.setMovies(this.filteredData);
    },
    sortMovies() {
      if (this.sortActive) {
        // @ts-ignore
        this.filteredData = this.filteredData.sort((a, b) => parseInt(a.release_date) - parseInt(b.release_date));
      } else {
        // @ts-ignore
        this.filteredData = this.filteredData.sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date));
      }
    }
  },
  mounted() {
    this.localData = this.moviesData;
    // @ts-ignore
    this.genres = this.localData.map((movie) => movie.genres).flat().filter((genre, index, genres) => genres.indexOf(genre) === index);
    this.showAll();
  }
});

export default Sort;
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.main-wrapper {
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  width: 1084px;
  background: $black;
  border-bottom: 2px solid $gray-2;

  .genres-wrapper {
    display: flex;
    width: 780px;
    flex-wrap: wrap;

    p {
      position: relative;
      cursor: pointer;
      user-select: none;
      padding-bottom: 21px;
      padding-top: 5px;

      &:not(:last-of-type) {
        margin-right: 17px;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 3px;
        background: #F65261;
        opacity: 0;
        transition: 0.2s linear opacity;
      }

      &.active:after {
        opacity: 1;
      }
    }
  }

  p {
    color: $white;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    text-transform: uppercase;
  }

  .sort-wrapper {
    display: flex;
    justify-content: space-between;
    width: 265px;
    padding-top: 5px;

    p {
      letter-spacing: 0.8px;
    }

    .release {
      position: relative;
      cursor: pointer;
      padding-right: 26px;

      &:after {
        content: "";
        position: absolute;
        display: block;
        background: url(assets/sort-icon.svg) no-repeat center/contain;
        width: 10px;
        height: 7px;
        right: 2px;
        top: 6px;
        transition: transform 0.3s linear;
        transform-origin: 5px 3px;
      }

      &.active:after {
        transform: rotate(180deg);
      }
    }

    .sort {
      font-weight: 400;
      opacity: 0.6;
      letter-spacing: 0.8px;
    }
  }
}
</style>
