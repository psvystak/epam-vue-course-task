<template>
  <div class="movie-item-large flex">
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
        <p class="duration style-font">2h 34min</p>
      </div>
      <p class="description">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import img from "./assets/img2.jpg";

const MovieDescription = defineComponent({
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
            "Adventure"
          ],
          release_date: "2020-12-12",
          vote_count: 8.9,
          overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
        };
      }
    }
  },
  data() {
    return {
      img
    };
  },
  computed: {
    returnYear() {
      return parseInt(this.movie.release_date);
    },
    computeGenres(): string {
      return this.movie!.genres.join(" & ");
    }
  }
});

export default MovieDescription;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.flex {
  display: flex;
  position: relative;
}

.movie-item-large {
  width: 1200px;
  font-weight: 500;
  background: #232323;
  justify-content: space-between;
  padding: 86px 60px 29px 60px;

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
        font-weight: 300;
      }

      &.genre {
        margin-top: 4px;
        opacity: 0.5;
        font-size: 14px;
      }

      &.rating {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 107.7%;
        border: 2px solid #979797;
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
