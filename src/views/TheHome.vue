<template>
  <div>
    <TheNavigation />
  </div>
  <div id="home" class="bg-gray-600 text-gray-50">
    <div class="w-full">
      <div class="px-0 md: px-8 pt-[270px] md:pt-[150px] mx-6 md:mx-2">
        <div class="flex justify-center items-center">
          <img :src="profile" class="w-[120px] h-[150px] rounded-full" />
        </div>
        <h1
          class="text-center font-bold leading-7 animate-bounce text-3xl md:text-5xl mb-[25px]"
        >
          Hello
        </h1>
        <h2
          class="text-center font-normal md:font-extrabold text-3xl md:text-5xl mb-[50px]"
        >
          I am Okoro Gift
        </h2>
        <h1
          class="text-center font-normal md:font-extrabold text-3xl md:text-5xl mb-[50px]"
        >
          I am a Frontend Developer
        </h1>
      </div>
      <div class="flex w-full justify-center items-center pb-[40px] space-x-4">
        <a href="https://twitter.com/Adaokoro10" target="_blank">
          <img :src="twitterIcon" class="w-[30px] h-[30px] rounded-[50%]" />
        </a>
        <a href="https://github.com/Gift-01" target="_blank">
          <img :src="github" class="w-[30px] h-[30px] rounded-[50%]" />
        </a>
        <a href="https://www.linkedin.com/in/gift-okoro-b526b7230/">
          <img :src="linkedIn" class="w-[30px] h-[30px] rounded-[50%]" />
        </a>
      </div>
    </div>
  </div>
  <TheAbout />
  <Theporfolio />
  <TheBlog />
  <ContactMe />
  <TheFooter />
</template>

<script>
import twitter from "../assets/newTwitter.png";
import github from "../assets/githubIcon.svg";
import linkedIn from "../assets/linkedinIcon.svg.png";
import Theporfolio from "../views/ThePortfolio.vue";
import TheNavigation from "../components/TheNavigation.vue";
import TheFooter from "../components/TheFooter.vue";
import TheAbout from "./TheAbout.vue";
import TheBlog from "./TheBlog.vue";
import ContactMe from "./ContactMe.vue";
import profile from "../assets/profile.jpeg";

export default {
  components: {
    Theporfolio,
    TheNavigation,
    TheFooter,
    TheAbout,
    TheBlog,
    ContactMe,
  },
  data: function () {
    return {
      twitterIcon: twitter,
      github: github,
      linkedIn: linkedIn,
      profile: profile,
    };
  },
};
</script>
