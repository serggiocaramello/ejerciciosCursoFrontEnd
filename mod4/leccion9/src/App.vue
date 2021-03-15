<template>
  <div id="app">
    <Listado />
    <Formulario />
  </div>
</template>

<script>
import Listado from "@/components/Listado";
import Formulario from "@/components/Formulario";
export default {
  name: "App",
  components: { Listado, Formulario }
};
</script>

<style lang="scss">
#app {
  padding: 0 2em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
