<template>
    <div class="loadingio-spinner-rolling-cartjbdsc7q">
      <div class="ldio-9fxjxwzfr2s">
        <div></div>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "Loader"
}
</script>

<style scoped lang="scss">

@import "../../assets/scss/variables";
@keyframes ldio-9fxjxwzfr2s {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.ldio-9fxjxwzfr2s div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid $red;
  border-top-color: transparent;
  border-radius: 50%;
}

.ldio-9fxjxwzfr2s div {
  animation: ldio-9fxjxwzfr2s 1s linear infinite;
  top: 100px;
  left: 100px
}

.loadingio-spinner-rolling-cartjbdsc7q {
  position: relative;
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}

.ldio-9fxjxwzfr2s {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-9fxjxwzfr2s div {
  box-sizing: content-box;
}
</style>