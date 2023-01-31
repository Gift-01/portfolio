<template>
  <div class="m-4 pt-[100px] pb-[50px] relative bg-gray-200" id="about">
    <div class="">
      <h1
        class="flex items-center justify-center font-black text-2xl mb-[35px]"
      >
        ABOUT
      </h1>
      <p class="text-[1rem]">
        I am OKoro Gift a Frontend Engineering student at AltSchool Africa,a
        teacher turned into a frontend Engineer in one year, I love learning new
        things and improving myself. My Love for learning new things made me
        transition from Teaching to tech. I am currently working on different
        Frontend Projects to build my skills, I am looking forward to
        collaborate with other developers on frontend Projects and also learn
        new things as well,I am open to Internship and Junior Roles.
      </p>
    </div>
    <p class="text-xl">Some of my Skills include:</p>
    <div
      class="flex flex-wrap justify-center items-center w-[100%] overflow-hidden"
    >
      <div
        class="flex flex-col md:flex-row border-2 border-gray-600 my-[40px] p-[130px] md:p-[50px]"
      >
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="logo" alt="html-logo" />
          <span> Html</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="css" alt="css-icon" />
          <span> Css</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="react" alt="reactIcon" />
          <span> React</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="vue" alt="vue-icon" />
          <span class="text-center"> Vue</span>
        </div>
        <div class="px-[10px] w-[80px] flex flex-col items-center">
          <img :src="tailwind" alt="tailwindIcon" />
          <span class="text-center"> Tailwind </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/html5Icon.svg.png";
import css from "../assets/csslogo.png";
import react from "../assets/react-icon.svg.png";
import vue from "../assets/vueLogo.svg.png";
import tailwind from "../assets/tailwindLogo.png";

export default {
  name: "TheAbout",
  data: function () {
    return {
      logo: logo,
      css: css,
      react: react,
      vue: vue,
      tailwind: tailwind,
    };
  },
};
</script>
