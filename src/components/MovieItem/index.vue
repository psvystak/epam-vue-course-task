<template>
  <div class="movie-item" @click="openFullPage('test')">
    <div class="img-wrapper">
      <img :alt="movie.title" :src="movie.poster_path" />
    </div>
    <div class="description">
      <div>
        <p class="name">{{ movie.title }}</p>
        <p class="genre">{{ computeGenres }}</p>
      </div>
      <p class="year">{{ returnYear }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import img from "./assets/img2.jpg";

const MovieItem = defineComponent({
  props: {
    movie: {
      type: Object,
      default: () => {
        return {
          id: 1,
          poster_path: img,
          title: "Pulp Fiction",
          genres: [
            "Action",
            "Adventure",
            "Science Fiction"
          ],
          release_date: "2020-12-12"
        }
      }
    },
  },
  data() {
    return {
      img,
    }
  },
  emits: {
    openFullPageEmit(payload: { bookName: string }) {
      console.log(payload.bookName);
    },
  },
  methods: {
    openFullPage(test: string) {
      this.$emit("openFullPageEmit", {
        bookName: test,
      });
    },
  },
  mounted() {

  },
  computed: {
    returnYear() {
      return parseInt(this.movie.release_date);
    },
    computeGenres(): string {
      return this.movie!.genres.join(' & ');
    },
  },
});

export default MovieItem;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.movie-item {
  width: 323px;
  font-weight: 500;
  background: $black;

  .img-wrapper {
    height: 455px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 17px;
    p {
      color: $white;
      &.name {
        opacity: 0.7;
        font-size: 18px;
      }
      &.genre {
        opacity: 0.5;
        font-size: 14px;
      }
      &.year {
        opacity: 0.7;
        border: 1px solid #979797;
        width: 66px;
        line-height: normal;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 5px 2px 0 0;
        font-size: 14px;
      }
    }
  }
}
</style>
