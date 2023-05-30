<template>
  <TheNavigation />
  <HomeLogic />
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
import HomeLogic from "../Functionality/HomeLayout.vue";

export default {
  components: {
    Theporfolio,
    TheNavigation,
    TheFooter,
    TheAbout,
    ContactMe,
    TheSkills,
    HomeLogic,
  },
  data: function () {
    return {};
  },
};
</script>
