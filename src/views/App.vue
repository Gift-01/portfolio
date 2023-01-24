<template>
  <div class="min-h-[100vh]">
    <div>
      <TheNavigation />
    </div>
    <div class="min-h-[calc(100vh-180px)]">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: { TheNavigation, TheFooter },
};
</script>
<style scoped></style>
