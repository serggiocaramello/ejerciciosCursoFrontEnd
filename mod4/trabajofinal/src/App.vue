<template>
  <div id="app">
    <Registro />
    <Tabla />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Registro from "@/components/Registro";
import Tabla from "@/components/Tabla";
export default {
  name: "App",
  components: { Registro, Tabla },
  data() {
    return {};
  },
  computed: {
    ...mapState(["items"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2em;
}
</style>
