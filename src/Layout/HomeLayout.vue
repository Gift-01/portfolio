<template>
  <div id="home" class="bg-gray-100">
    <div class="w-full pb-[20px]">
      <div class="pt-[115px] md:pt-[170px]">
        <h2
          class="text-center font-normal text-3xl md:text-5xl mb-[25px] font-serif"
        >
          Hi there,I am Gift.
        </h2>
        <h1 class="text-center font-normal mb-[25px] md:mb-[40px]">
          Frontend Developer
        </h1>
      </div>
      <div
        class="flex w-full justify-center items-center space-x-4 pb-[25px] md:pb-[40px]"
      >
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
      <div
        class="flex flex-col text-center justify-center bg-gray-600 rounded w-[100px] p-[10px] mx-36 md:mx-[42rem] border-white border-2"
      >
        <a
          href="https://drive.google.com/file/d/1NiVSOMxrViNDjcQI6TqnzXDKKHu6D0sk/view?usp=sharing"
          target="_blank"
        >
          <button class="text-white">View CV</button>
        </a>
      </div>
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
