<template>
  <div class="w-[100%]">
    <div class="px-8 py-10 mx-6 md:mx-2">
      <h1
        class="text-center font-bold leading-7 animate-bounce text-5xl mb-[25px]"
      >
        Hello
      </h1>
      <h2 class="text-center font-normal md:font-extrabold text-5xl mb-[50px]">
        I am Okoro Gift
      </h2>
      <h1 class="text-center font-normal md:font-extrabold text-5xl mb-[50px]">
        I am a Frontend Developer
      </h1>
      <!-- <p class="text-sm font-bold text-center">
        I am a web Developer who likes to create and build exciting and
        challenging Projects. I have Passion for discovering and things and also
        learning new technologies.
      </p> -->
    </div>
    <div class="flex w-full justify-center items-center pb-[20px] space-x-4">
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
</template>

<script>
import twitter from "../assets/newTwitter.png";
import github from "../assets/githubIcon.svg";
import linkedIn from "../assets/linkedinIcon.svg.png";

export default {
  data: function () {
    return {
      twitterIcon: twitter,
      github: github,
      linkedIn: linkedIn,
    };
  },
};
</script>
