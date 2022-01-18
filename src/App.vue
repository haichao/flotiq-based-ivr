<template>
  <div id="app">
    <IvrEditor/>
  </div>
</template>

<script>
import IvrEditor from "@/components/IvrEditor.vue";

export default {
  components: {
    IvrEditor
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
}

// Styles from codepen which are necessary
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  background-image: url(tile.png);
  background-repeat: repeat;
  background-size: 30px 30px;
  background-color: #FBFBFB;
}
</style>
