<template>
  <transition name="fade">
    <div :class="{'show-success-popup': !showMainContent}" class="popup">
      <svg class="close-button" fill="none" height="23" viewBox="0 0 23 23" width="23"
           xmlns="http://www.w3.org/2000/svg"
           @click="closeMoviePopup">
        <path
          d="M2.17812 0.44719C1.78759 0.0566658 1.15443 0.0566658 0.763902 0.44719C0.373378 0.837714 0.373378 1.47088 0.763902 1.8614L2.17812 0.44719ZM20.8219 21.9194C21.2124 22.3099 21.8456 22.3099 22.2361 21.9194C22.6266 21.5289 22.6266 20.8957 22.2361 20.5052L20.8219 21.9194ZM22.2361 1.8614C22.6266 1.47088 22.6266 0.837714 22.2361 0.44719C21.8456 0.0566658 21.2124 0.0566658 20.8219 0.44719L22.2361 1.8614ZM0.763902 20.5052C0.373377 20.8957 0.373377 21.5289 0.763902 21.9194C1.15443 22.3099 1.78759 22.3099 2.17812 21.9194L0.763902 20.5052ZM0.763902 1.8614L20.8219 21.9194L22.2361 20.5052L2.17812 0.44719L0.763902 1.8614ZM20.8219 0.44719L0.763902 20.5052L2.17812 21.9194L22.2361 1.8614L20.8219 0.44719Z"
          fill="white" />
      </svg>
      <div v-if="showMainContent" class="popup-wrapper">
        <p class="header">{{ title }}</p>
        <div class="input-wrapper">
          <div class="title large-input">
            <label for="title">TITLE</label>
            <input id="title" v-model="inputsData.title" placeholder="Insert Title" type="text">
          </div>
          <div class="release-date small-input">
            <label>RELEASE DATE</label>
            <datepicker ref="datepicker" v-model="initialDate" :enableTimePicker="false"
                        class="datepicker" dark
                        name="releaseDate" placeholder="Select Date"
                        @update:modelValue="setDate">
              <template #input-icon>
                <svg v-if="!initialDate" class="calendar-icon" fill="none" height="22" viewBox="0 0 24 22"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M12.1252 5.97543C15.5213 5.97543 18.9173 5.97493 22.3133 5.97757C22.424 5.97765 22.4647 5.95779 22.4627 5.84333C22.4552 5.40875 22.4627 4.97397 22.4591 4.53929C22.4525 3.72259 21.7813 3.0863 20.9218 3.0825C20.2566 3.07957 19.5913 3.08353 18.9261 3.07981C18.8349 3.07928 18.8096 3.10205 18.8111 3.18849C18.8167 3.50895 18.8143 3.82953 18.8131 4.15007C18.8115 4.5672 18.4745 4.89267 18.0448 4.89375C17.6176 4.89486 17.2785 4.56776 17.2762 4.14975C17.2744 3.84241 17.2695 3.53485 17.2789 3.22774C17.2826 3.10859 17.249 3.07875 17.1218 3.07891C14.0608 3.0826 10.9997 3.08179 7.93862 3.08179C7.5711 3.08179 7.20355 3.085 6.83611 3.0796C6.74271 3.07823 6.72169 3.10503 6.72298 3.18894C6.72798 3.5138 6.72784 3.83879 6.7241 4.16368C6.71937 4.57169 6.37468 4.89607 5.95442 4.8937C5.52849 4.8913 5.19 4.57013 5.18743 4.16273C5.18539 3.8422 5.18218 3.52156 5.18989 3.20118C5.19232 3.10081 5.16264 3.07862 5.05958 3.07936C4.40831 3.08408 3.75699 3.08065 3.1057 3.0821C2.21155 3.08405 1.54209 3.71879 1.53994 4.56567C1.53888 4.98281 1.54793 5.40016 1.53564 5.81697C1.53144 5.95853 1.58055 5.9782 1.71388 5.97807C5.14247 5.97472 8.57105 5.97543 11.9996 5.97543H12.1252ZM1.68532 7.42495C1.57468 7.42484 1.5367 7.4432 1.53684 7.55766C1.54044 11.0525 1.53997 15.5216 1.53972 19.0164C1.53972 19.1353 1.5479 19.2535 1.57568 19.3693C1.74319 20.0666 2.34947 20.5218 3.11232 20.5219C9.02451 20.5222 14.9367 20.5221 20.8489 20.522C21.7995 20.522 22.4598 19.8985 22.4599 19C22.4601 15.5183 22.459 11.0624 22.4631 7.58075C22.4633 7.45315 22.4306 7.42405 22.2966 7.42418C18.8684 7.42806 15.4401 7.42724 12.0119 7.42724C8.56971 7.42724 5.12751 7.42777 1.68532 7.42495ZM3.12213 21.973C1.6173 21.9727 0.393659 21.0478 0.0661259 19.6617C0.0205731 19.469 0.000507558 19.2721 0.000507558 19.0741C0.000311933 14.5514 -0.00077798 9.05448 0.0010106 4.5318C0.00159747 3.06591 1.14682 1.84407 2.68706 1.6533C2.81229 1.63778 2.93693 1.63164 3.06249 1.63159C3.7324 1.63132 4.4023 1.63 5.07221 1.6333C5.16086 1.63372 5.19157 1.61502 5.18939 1.5258C5.18282 1.25808 5.18528 0.990147 5.18749 0.722292C5.19081 0.321486 5.52732 0.00274473 5.94679 0.000133179C6.37309 -0.00250475 6.71943 0.316632 6.72418 0.720657C6.7274 0.992864 6.72765 1.26518 6.72332 1.53733C6.72211 1.61146 6.74411 1.64282 6.82376 1.63193C6.84653 1.62882 6.8702 1.63145 6.89348 1.63145C10.2988 1.63145 13.7042 1.63035 17.1095 1.63523C17.2566 1.63544 17.2844 1.59587 17.2789 1.46909C17.2681 1.2236 17.2745 0.977406 17.2761 0.731525C17.2788 0.323965 17.618 0.000739902 18.0416 1.28268e-06C18.4695 -0.000737337 18.8095 0.317608 18.8128 0.724746C18.8148 0.979385 18.8191 1.23426 18.8104 1.48869C18.8067 1.59898 18.8289 1.63649 18.9585 1.63496C19.6097 1.62734 20.2611 1.63111 20.9124 1.63151C22.5162 1.63254 23.8273 2.75487 23.9802 4.25891C23.9921 4.37664 23.9991 4.49532 23.9991 4.61358C24 9.10552 24.0008 14.5717 23.9986 19.0637C23.9983 19.7146 23.7948 20.3075 23.3702 20.8234C22.7496 21.5774 21.9281 21.969 20.9165 21.971C17.9438 21.9768 14.9711 21.9731 11.9984 21.9731C9.03963 21.9731 6.08088 21.9735 3.12213 21.973Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M18.0072 12.997C17.3833 12.997 16.7595 12.9939 16.1357 13C16.0266 13.001 15.9996 12.9722 16 12.8575C16.0043 11.6192 16.0046 10.3808 16.0001 9.14255C15.9997 9.02394 16.033 9.00052 16.1384 9.00083C17.3813 9.0045 18.6242 9.00487 19.8671 9C19.98 8.99958 19.9997 9.03518 19.9994 9.14549C19.9956 10.3838 19.9953 11.6221 20 12.8604C20.0004 12.9773 19.97 13.0007 19.8643 12.9998C19.2453 12.9941 18.6263 12.997 18.0072 12.997Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M5.99528 12.9981C5.37098 12.998 4.74669 12.9963 4.12242 13C4.03314 13.0005 3.99983 12.9838 4.00018 12.8783C4.00399 11.6293 4.0041 10.3802 4 9.13113C3.99965 9.01899 4.0341 8.99982 4.13094 9.00009C5.37464 9.00343 6.61841 9.00371 7.86211 9C7.9672 8.9997 8.00043 9.02233 8 9.14111C7.99517 10.3851 7.99482 11.6291 7.99991 12.873C8.00037 12.9918 7.95999 13.0005 7.86812 13C7.24386 12.9963 6.61957 12.9981 5.99528 12.9981Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M12.0083 9.00297C12.623 9.003 13.2377 9.00539 13.8524 9.00076C13.9593 8.99997 14.0005 9.01892 14 9.14762C13.9947 10.3852 13.9952 11.6228 13.9999 12.8604C14.0004 12.9778 13.969 12.9999 13.8637 12.9995C12.6198 12.9954 11.3758 12.995 10.1319 13C10.0187 13.0005 9.99995 12.9653 10.0003 12.856C10.004 11.6184 10.0043 10.3808 10 9.14324C9.99963 9.0289 10.0255 8.99896 10.1352 9.00003C10.7595 9.006 11.3839 9.00294 12.0083 9.00297Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M17.9998 15.0025C18.6236 15.0027 19.2475 15.0052 19.8713 15.0001C19.9703 14.9993 20.0003 15.0219 20 15.1314C19.9961 16.3759 19.9963 17.6203 20 18.8648C20.0003 18.9693 19.9796 19 19.8753 18.9997C18.6276 18.9954 17.3799 18.9951 16.1322 19C16.018 19.0005 15.9997 18.9633 16 18.8537C16.0038 17.6144 16.0039 16.375 16.0002 15.1357C15.9999 15.0281 16.0269 14.9992 16.1282 15C16.752 15.0048 17.3759 15.0024 17.9998 15.0025Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M6.00889 15.002C6.62326 15.002 7.23765 15.0041 7.85198 15C7.9554 14.9993 8.00063 15.0122 7.99999 15.1443C7.99424 16.3837 7.9956 17.6232 7.99903 18.8627C7.9993 18.9647 7.98115 19.0004 7.87518 19C6.6223 18.9957 5.36938 18.9957 4.11647 18.9999C4.01591 19.0003 4.00023 18.9657 4.00044 18.8717C4.00314 17.622 4.00375 16.3723 4 15.1227C3.99968 15.0172 4.03265 14.9996 4.12228 15.0001C4.75112 15.0038 5.38002 15.0021 6.00889 15.002Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                  <path clip-rule="evenodd"
                        d="M11.996 15.0027C12.6153 15.0026 13.2347 15.0047 13.854 15.0004C13.959 14.9997 14.0006 15.0178 14 15.1458C13.9945 16.3796 13.9941 17.6135 14 18.8473C14.0006 18.9817 13.9606 19.0004 13.8471 19C12.6132 18.9956 11.3793 18.9959 10.1455 18.9993C10.0395 18.9996 10.0001 18.9823 10.0006 18.8545C10.0061 17.6207 10.0061 16.3868 10 15.153C9.99937 15.0191 10.0381 14.9989 10.1524 15C10.7669 15.0061 11.3814 15.0029 11.996 15.0027Z"
                        fill="#F65261"
                        fill-rule="evenodd" />
                </svg>
              </template>
            </datepicker>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="url large-input">
            <label for="url">MOVIE URL</label>
            <input id="url" v-model="inputsData.poster_path" placeholder="https://" type="text">
          </div>
          <div class="rating small-input">
            <label for="rating">RATING</label>
            <input id="rating" v-model.number="inputsData.vote_count" maxlength="2" placeholder="Insert Rating"
                   type="number">
          </div>
        </div>
        <div class="input-wrapper">
          <div class="large-input genre">
            <span class="label" @click="toggleDropdown">GENRE</span>
            <div :class="{opened: showDropdown}" class="dropdown-select"
                 @click="toggleDropdown">Select Genre
              <svg class="dropdown-icon" fill="none" height="12" viewBox="0 0 18 12" width="18"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M1.13423 0C0.286533 0 -0.176668 0.988581 0.365828 1.63996L8.22615 11.0779C8.6258 11.5578 9.36265 11.558 9.76259 11.0784L17.6322 1.64041C18.1752 0.989135 17.7121 0 16.8642 0H1.13423Z"
                      fill="#F65261"
                      fill-rule="evenodd" />
              </svg>
            </div>
            <transition name="fade">
              <div v-if="showDropdown" v-click-outside="hideDropdown" class="dropdown-wrapper">
                <div v-for="(genre, index) in genres" :key="genre.name" class="dropdown-item" @click="addGenre(index)">
                  <div class="checkboxes">
                    <svg v-show="!genre.selected" fill="none" height="16" viewBox="0 0 17 16" width="17"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect fill="white" height="15" rx="1.5" stroke="#E6E8ED" width="15.0909" x="0.5" y="0.5" />
                    </svg>
                    <svg v-show="genre.selected" fill="none" height="16" viewBox="0 0 17 16" width="17"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect fill="#E44C5A" height="16" rx="2" width="16.0904" />
                      <path
                        d="M4.44742 7.33543L3.01697 8.77086L6.82685 12L13.0735 5.2675L11.4673 4L6.64465 9.19774L4.44742 7.33543Z"
                        fill="white" />
                    </svg>
                  </div>
                  {{ genre.name }}
                </div>
              </div>
            </transition>
          </div>
          <div class="runtime small-input">
            <label for="runtime">RUNTIME</label>
            <input id="runtime" v-model="inputsData.runtime" placeholder="Insert Runtime" type="text">
          </div>
        </div>
        <div class="input-wrapper">
          <div class="overview">
            <label for="overview">OVERVIEW</label>
            <textarea id="overview" v-model="inputsData.overview" placeholder="Movie description" />
          </div>
        </div>
        <div class="form-controls">
          <button @click="reset">RESET</button>
          <button class="submit" @click="submit">SUBMIT</button>
        </div>
      </div>
      <div v-else :class="{'delete': deleteMode}" class="success-popup">
        <svg v-if="!deleteMode" class="success-img" fill="none" height="66" viewBox="0 0 66 66" width="66"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="33" cy="33" fill="#F65261" r="32.5" stroke="#F65261" />
          <path d="M14 35.8347L24.1175 46L49 21" stroke="white" stroke-linecap="round" stroke-width="5" />
        </svg>
        <p v-if="!deleteMode" class="success-title">CONGRATULATIONS !</p>
        <p v-if="!editMode && !deleteMode">The movie has been added to
          database successfully</p>
        <p v-if="editMode">The movie has been edited in
          database successfully</p>
        <p v-if="deleteMode" class="success-title delete">DELETE MOVIE</p>
        <p v-if="deleteMode" class="delete">Are you sure you want to delete this movie?</p>
        <button v-if="deleteMode" class="submit delete" @click="submit">CONFIRM</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
// @ts-ignore
import vClickOutside from "click-outside-vue3";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import Datepicker from "vue3-date-time-picker";

const AddMovie = defineComponent({
  data() {
    return {
      showMainContent: true,
      initialDate: "",
      inputsData: {
        id: 0,
        title: "",
        release_date: "",
        poster_path: "",
        vote_count: "",
        runtime: "",
        genres: [],
        overview: ""
      },
      genres: [
        {
          name: "Crime",
          selected: false
        },
        {
          name: "Documentary",
          selected: false
        },
        {
          name: "Horror",
          selected: false
        },
        {
          name: "Comedy",
          selected: false
        }
      ],
      showDropdown: false
    };
  },
  components: {
    Datepicker
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  computed: {
    ...mapGetters(["editMode", "movies", "currentMovie", "editId", "cachedGenres", "deleteMode"]),
    title() {
      if (!this.editMode) {
        return "ADD MOVIE";
      } else {
        return "EDIT MOVIE";
      }
    }
  },
  mounted() {
    if (this.editMode) {
      // @ts-ignore
      let editedIndex = this.movies.findIndex((movie) => movie.id === this.editId);
      // @ts-ignore
      this.initialDate = new Date(Date.parse(this.currentMovie.release_date));
      this.inputsData = { ...this.currentMovie };
      // @ts-ignore
      if (this.movies[editedIndex].cachedGenres?.length) {
        // @ts-ignore
        this.genres = this.movies[editedIndex].cachedGenres;
      } else {
        this.genres = [];
        this.inputsData.genres.forEach((genre) => {
          return this.genres.push({
            name: genre,
            selected: true
          });
        });
        // @ts-ignore
        this.setCachedGenres(this.genres);
        this.movies[editedIndex].cachedGenres = this.cachedGenres;
        this.setMovies(this.movies);
      }
    } else if (this.deleteMode) {
      this.showMainContent = false;
    }
  },
  methods: {
    ...mapMutations(["closePopup", "setMovies", "setCachedGenres"]),
    closeMoviePopup() {
      this.closePopup();
      setTimeout(() => {
        this.showMainContent = true;
      }, 300);
    },
    setDate(date: any) {
      this.inputsData.release_date = new Date(Date.parse(date)).toLocaleDateString("ua-UA").split(".").reverse().join("-");
    },
    reset() {
      if (!this.editMode) {
        //@ts-ignore
        Object.keys(this.inputsData).forEach((input) => this.inputsData[input] = "");
        this.inputsData.id = 0;
        this.inputsData.genres = [];
        //@ts-ignore
        this.$refs.datepicker.clearValue();
        //@ts-ignore
        this.genres.forEach((genre) => genre.selected = false);
      } else {
        this.inputsData = { ...this.currentMovie };
      }
    },
    submit() {
      this.inputsData.id = Date.now();
      let uniqueData = { ...this.inputsData };
      // @ts-ignore
      uniqueData.cachedGenres = this.cachedGenres;
      //@ts-ignore
      if (this.deleteMode) {
        //@ts-ignore
        let editedIndex = this.movies.findIndex((movie) => movie.id === this.editId);
        this.movies.splice(editedIndex, 1);
        this.closeMoviePopup();
      } else {
        if (Object.keys(this.inputsData).some((input) => this.inputsData[input] === "" && input !== "tagline") || this.inputsData.release_date === "Invalid Date") {
          alert("Please fill all fields!!!");
        } else {
          if (!this.editMode) {
            this.movies.push(uniqueData);
            this.reset();
          } else {
            //@ts-ignore
            let editedIndex = this.movies.findIndex((movie) => movie.id === this.editId);
            this.movies[editedIndex] = uniqueData;
          }
        }
      }
      this.setMovies(this.movies);
      this.showMainContent = false;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    addGenre(id: number) {
      if (this.genres[id].selected) {
        let selectedId = this.inputsData.genres.findIndex((name) => name === this.genres[id].name);
        this.inputsData.genres.splice(selectedId, 1);
      } else {
        //@ts-ignore
        this.inputsData.genres.push(this.genres[id].name);
        //@ts-ignore
        this.inputsData.genres = this.inputsData.genres.sort((a, b) => a.localeCompare(b));
      }
      this.genres[id].selected = !this.genres[id].selected;
    },
    hideDropdown() {
      this.showDropdown = false;
    }
  }
});

export default AddMovie;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.datepicker .dp__today {
  border: 1px solid black;
}

.popup {
  position: absolute;
  top: 175px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $black;
  color: $white;
  width: 976px;
  height: 977px;
  padding: 72px 57px;
  z-index: 3;

  &.show-success-popup {
    width: 666px;
    height: 322px;
    padding: 0;
  }

  .success-popup {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    &.delete {
      align-items: flex-start;
      padding: 32px 62px;
    }

    .success-title {
      font-weight: 300;
      letter-spacing: 1.1px;
      font-size: 40px;
      margin-top: 41px;

      &.delete {
        text-align: left;
      }
    }

    .success-img {
      margin-top: 44px;
    }

    p:nth-of-type(2) {
      font-size: 20px;
      margin-top: 39px;
      padding: 0 146px;
      text-align: center;
      line-height: 24px;
      &.delete {
        text-align: left;
        margin: 47px 0 0 4px;
        padding: 0 0 4px 0;
      }
    }
  }

  .popup-wrapper {
    width: 100%;
    height: 100%;
  }

  .close-button {
    position: absolute;
    cursor: pointer;
    right: 29px;
    top: 30px;
  }

  .header {
    font-size: 41px;
    font-weight: 300;
  }

  .input-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    padding-left: 3px;

    &:not(:first-of-type) {
      margin-top: 28px;
    }

    label,
    .label {
      color: $red;
      font-size: 16px;
      font-weight: 600;
      user-select: none;
      cursor: pointer;
    }

    .large-input {
      width: 525px;

      &.genre {
        position: relative;
      }
    }

    .small-input {
      width: 301px;
    }

    input, textarea, .dropdown-select {
      width: 100%;
      height: 57px;
      background-color: $black-2;
      color: $white;
      margin-top: 4px;
      outline: none;
      border: 1px solid transparent;
      padding-left: 20px;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      border-radius: 4px;
      transition: border 0.2s linear;

      &::placeholder {
        color: $placeholder-color;
      }

      &:active,
      &:focus,
      &:hover {
        border: 1px solid $red;
      }
    }

    .label:hover + .dropdown-select {
      border: 1px solid $red;
    }

    .dropdown-select {
      display: flex;
      cursor: pointer;
      user-select: none;
      align-items: center;
      justify-content: space-between;
      padding-right: 18px;
      color: $placeholder-color;
      transition: 0.3s linear;

      .dropdown-icon {
        transition: 0.3s linear;
        transform-origin: 9px 5px;
        margin-top: 5px;
      }

      &.opened {
        color: $white;
        border: 1px solid $red;

        .dropdown-icon {
          transform: rotate(-180deg);
        }
      }
    }

    textarea {
      padding-top: 20px;
      height: 197px;
    }

    .overview {
      width: 100%;
    }
  }

  .form-controls {
    display: flex;
    justify-content: flex-end;
    margin-top: 53px;
  }

  button {
    border-radius: 4px;
    color: $red;
    border: 1px solid $red;
    background: transparent;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    width: 182px;
    height: 57px;
    cursor: pointer;

    &.submit {
      color: $white;
      background: $red;
      margin-left: 15px;

      &.delete {
        margin: 47px 0 0 0;
        align-self: flex-end;
      }
    }
  }

  .dropdown-wrapper {
    position: absolute;
    top: 96px;
    left: 0;
    width: 525px;
    border-radius: 4px;
    background-color: $black-opacity;
    backdrop-filter: blur(2px);
    padding: 14px 17px 24px 17px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dropdown-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-size: 20px;
      line-height: 20px;
      width: max-content;

      &:not(:first-of-type) {
        margin-top: 45px;
      }

      .checkboxes {
        display: flex;
        align-items: center;
        margin-right: 8px;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
