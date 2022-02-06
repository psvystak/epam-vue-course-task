<template>
  <div class="add-button" @click="openPopup">
    + ADD MOVIE
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

const AddMovie = defineComponent({
  data() {
    return { };
  },
  methods: {
    ...mapMutations(["openPopup", "setAddMode"]),
    openMoviePopup() {
      this.openPopup();
      this.setAddMode();
    }
  }
});

export default AddMovie;
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.add-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 177px;
  height: 46px;
  border-radius: 2px;
  background-color: $gray-4;
  color: $red;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
