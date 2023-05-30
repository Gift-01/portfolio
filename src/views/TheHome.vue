<template>
  <TheNavigation />
  <HomeLayout />
  <TheAbout />
  <TheSkills />
  <Theporfolio />
  <ContactMe />
  <TheFooter />
</template>

<script>
import Theporfolio from "../views/ThePortfolio.vue";
import TheNavigation from "../components/TheNavigation.vue";
import TheFooter from "../components/TheFooter.vue";
import TheAbout from "./TheAbout.vue";
import ContactMe from "./ContactMe.vue";
import TheSkills from "./TheSkills.vue";
import HomeLayout from "../Layout/HomeLayout.vue";

export default {
  components: {
    Theporfolio,
    TheNavigation,
    TheFooter,
    TheAbout,
    ContactMe,
    TheSkills,
    HomeLayout,
  },
  data: function () {
    return {};
  },
};
</script>
