<template>
  <q-page id="index">
    <TheNavbar />
    <Carousel />
    <div class="content row">
      <div
        id="articles"
        class="articles q-pa-md row items-start justify-center q-gutter-md col-md-9"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <TheAside />
    </div>
    <TheFooter />
  </q-page>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import Carousel from "../components/Carousel.vue";
import Card from "../components/Card";
import TheAside from "../components/TheAside";
import TheFooter from "../components/TheFooter.vue";
export default {
  name: "PageIndex",
  components: { TheNavbar, Carousel, Card, TheAside, TheFooter }
};
</script>

<style lang="scss" scoped>
.content {
  @media screen and (min-width: $md) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
