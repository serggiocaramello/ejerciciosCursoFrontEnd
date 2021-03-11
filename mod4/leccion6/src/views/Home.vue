<template>
  <div class="home">
    <Boton msg="Hola soy el router 1" bgColor="teal" />
  </div>
</template>

<script>
import Boton from "@/components/Boton.vue";

export default {
  name: "Home",
  components: { Boton }
};
</script>

<style lang="scss" scoped></style>
