<template>
  <button class="button is-primary" @click="onClick">
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const MyButton = defineComponent({
  emits: {
    addBook(payload: { bookName: string }) {
      // perform runtime validation
      return payload.bookName;
    },
  },
  methods: {
    onClick() {
      this.$emit("addBook", {
        bookName: "click", // Type error!
      });
    },
  },
});

export default MyButton;
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
