<template>
  <div class="movie-item">
    <div class="img-wrapper">
      <img :alt="movie.name" :src="movie.img" />
    </div>
    <div class="description">
      <div>
        <p class="name">{{ movie.name }}</p>
        <p class="genre">{{ movie.genre }}</p>
      </div>
      <p class="year">{{ movie.year }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const MovieItem = defineComponent({
  props: {
    movie: {
      type: Object,
      img: String,
      name: String,
      genre: String,
      year: Number,
    },
  },
  emits: {
    addBook(payload: { bookName: string }) {
      return payload.bookName;
    },
  },
  methods: {
    onClick() {
      this.$emit("addBook", {
        bookName: "click",
      });
    },
  },
});

export default MovieItem;
</script>

<style lang="scss" scoped>
.movie-item {
  @import "src/assets/scss/variables";
  height: 524px;
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
