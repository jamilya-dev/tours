<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <img
          class="mb-4 w-100"
          :src="require(`@/assets/img/${tour.img}`)"
          alt=""
        />
        <h2>{{ tour.title }}</h2>
        <div class="description">
          {{ tour.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tour() {
      return this.$store.getters["getToursById"](this.$route.params.id);
    },
  },
};
</script>
