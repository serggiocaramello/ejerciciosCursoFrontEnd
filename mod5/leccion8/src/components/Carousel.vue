<template>
  <div>
    <q-carousel arrows animated v-model="slide" height="400px">
      <q-carousel-slide
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">I am the First slide</div>
          <div class="text-subtitle1">{{ slide1Msg }}</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">I'am the second slide</div>
          <div class="text-subtitle1">{{ slide2Msg }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: "first",
      slide1Msg: "This is a Carousel component.",
      slide2Msg: 'It"s easy to personalize and use.'
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
