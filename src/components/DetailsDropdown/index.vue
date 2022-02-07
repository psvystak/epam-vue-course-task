<template>
  <div class="drop-down-main-wrapper flex">
    <img :src="img" class="open-button" alt="Dropdown image with 3 dots" @click.prevent.stop="open" />
    <div class="dropdown-wrapper" v-if="opened" v-click-outside="hide">
      <p @click.prevent.stop="editMovie(id)">Edit</p>
      <p @click.prevent.stop="deleteMovie(id)">Delete</p>
      <div class="close-button" @click.prevent.stop="hide">
        <img :src="close" alt="Close button cross" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import img from "./assets/dropdown-button.svg";
import close from "./assets/close.svg";
// @ts-ignore
import vClickOutside from "click-outside-vue3";
import { mapGetters, mapMutations } from "vuex";

const DetailsDropdown = defineComponent({
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  computed: {
    ...mapGetters(["editId", "movies"]),
  },
  methods: {
    ...mapMutations(["setEditId", "setEditMode", "setDeleteMode", "openPopup"]),
    open() {
      this.opened = true;
    },
    hide() {
      this.opened = false;
    },
    editMovie(id: number) {
      this.setEditId(id);
      this.setEditMode();
      // @ts-ignore
      let currentMovie = this.movies.find((movie) => movie.id === this.editId);
      // @ts-ignore
      if (!currentMovie.runtime) {
        currentMovie.runtime = "2h 34min";
      }
      this.openPopup(currentMovie);
    },
    deleteMovie(id: number) {
      this.setEditId(id);
      this.setDeleteMode();
      this.openPopup();
    }
  },
  data() {
    return {
      img,
      close,
      opened: false
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
});

export default DetailsDropdown;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.drop-down-main-wrapper {
  width: 190px;
  height: 111px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  .open-button {
    width: 42px;
    height: 42px;
    margin-right: -4px;
    opacity: 0;
  }

  .dropdown-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #232323;
    padding-top: 22px;

    p {
      color: $white;
      padding: 2px 24px;

      &:hover {
        background: $red;
      }
      &:not(:last-of-type) {
        margin-bottom: 8px;
      }
    }
    .close-button {
      position: absolute;
      top: 6px;
      right: 8px;
      width: 13px;
      height: 13px;
      &:before {
        position: absolute;
        content: '';
        display: block;
        width: 200%;
        height: 200%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      img {
        display: block;
        margin: auto;
      }
    }
  }
}

.flex {
  display: flex;
  position: relative;
}
</style>
