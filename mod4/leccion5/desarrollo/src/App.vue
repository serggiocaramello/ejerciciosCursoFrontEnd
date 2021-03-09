<template>
  <div id="app">
    <Calculadora />
  </div>
</template>

<script>
import Calculadora from "./components/Calculadora";

export default {
  name: "App",
  components: {
    Calculadora,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
