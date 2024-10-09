<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <router-link
          :to="`/tours/${tour.id}`"
          v-for="tour in tours"
          :key="tour.id"
        >
          <div class="item-wrapper d-flex flex-column mb-4">
            <img
              :src="require(`@/assets/img/${tour.img}`)"
              class="mb-3"
              :alt="tour.img"
            />

            <h3 class="">{{ tour.title }}</h3>
            <div class="description">
              {{ tour.description }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    tours() {
      return this.$store.getters["getTours"];
    },
  },
};
</script>
