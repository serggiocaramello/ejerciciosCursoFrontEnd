<template>
  <div class="btn">
    <h2 :style="{ backgroundColor: bgColor }">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Boton",
  props: {
    msg: String,
    bgColor: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  background-color: skyblue;
  color: #fff;
  margin: 0 auto;
  padding: 2em;
  width: fit-content;
}
</style>
