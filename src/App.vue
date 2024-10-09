<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HomeViews from "./views/HomeViews.vue";

export default {
  name: "App",
  components: {
    HomeViews,
  },
};
</script>
