<template>
  <div class="header-wrapper flex">
    <router-link class="logo" to="/">
      <p>netflixroulette</p>
    </router-link>
    <router-link class="search" to="/">
      <img :src="searchIcon" alt="Search icon">
    </router-link>
  </div>
  <div class="content-wrapper flex">
    <div class="img-wrapper">
      <img :alt="movie.title" :src="movie.poster_path" />
    </div>
    <div class="description-wrapper">
      <div>
        <p class="name">{{ movie.title }}</p>
        <p class="rating">{{ movie.vote_count }}</p>
      </div>
      <p class="genre">{{ computeGenres }}</p>
      <div class="flex">
        <p class="year style-font">{{ returnYear }}</p>
        <p class="duration style-font">{{ movie.runtime || "2h 34min" }}</p>
      </div>
      <p class="description">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import searchIcon from "./assets/search.svg";
import Loader from "../../components/Loader/index.vue";
import { mapGetters } from "vuex";

const MovieDescription = defineComponent({
  props: {
    id: {
      type: String,
      default: () => "447365"
    }
  },
  data() {
    return {
      searchIcon,
      Loader
    };
  },
  computed: {
    ...mapGetters(["movies"]),
    movie(): object {
      // @ts-ignore
      return this.movies.find((item) => item.id === +this.$route.query.id);
    },
    returnYear(): number {
      // @ts-ignore
      return parseInt(this.movie.release_date);
    },
    computeGenres(): string {
      // @ts-ignore
      return this.movie.genres.join(" & ");
    }
  },
  mounted() {
    console.log();
  }
});

export default MovieDescription;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.header-wrapper {

}

.flex {
  display: flex;
  position: relative;
}

.header-wrapper {
  padding: 34px 60px 0 60px;
  background: $black;
  width: 100%;
  height: 75px;
  justify-content: space-between;
}

.content-wrapper {
  width: 1200px;
  font-weight: 500;
  background: $black;
  padding: 17px 60px 29px 60px;
  justify-content: space-between;

  .img-wrapper {
    width: 320px;
    height: 485px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content-wrapper {
    margin-top: 17px;
    justify-content: space-between;
  }

  .description-wrapper {
    padding-top: 8px;
    width: 700px;

    > div:first-of-type {
      position: relative;
      display: inline-block;
    }

    > div:nth-of-type(2) {
      margin-top: 22px;
      width: 216px;
      justify-content: space-between;

      .year {

      }

      .duration {

      }

      .style-font {
        color: $red;
        font-size: 23px;
        font-weight: 300;
      }
    }

    p {
      color: $white;

      &.name {
        text-transform: uppercase;
        font-size: 41px;
        line-height: 40px;
        font-weight: 300;
        max-width: 470px;
      }

      &.genre {
        margin-top: 4px;
        opacity: 0.5;
        font-size: 14px;
      }

      &.rating {
        position: absolute;
        top: -10px;
        left: 107.7%;
        border: 2px solid $gray-2;
        width: 62px;
        height: 62px;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 35px;
        margin: 0;
        font-size: 18px;
        font-weight: 300;
      }
    }

    .description {
      opacity: 0.5;
      font-size: 20px;
      font-weight: 300;
      margin-top: 28px;
      line-height: 24px;
    }
  }
}
</style>
