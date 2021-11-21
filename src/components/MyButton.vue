<template>
  <button class="button is-primary" @click="onClick">
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "my-button",

  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onClick: function () {
      /**
       * Click event
       *
       * @event click
       */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$emit("click");
    },
  },
};
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
