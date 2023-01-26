<template>
  <div class="m-4 pt-[100px] pb-[50px] relative" id="about">
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
      <!-- <p>
        I am curently working on different Frontend Project to build my skills.I
        am an Avid Learner, I am open to Internship and Junior Roles
      </p> -->
    </div>
    <p class="text-xl">Some of my Skills include:</p>
    <div
      class="flex flex-wrap justify-center items-center w-[100%] overflow-hidden"
    >
      <div
        class="flex flex-col md:flex-row border-2 border-gray-200 my-[40px] p-[50px]"
      >
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="logo" />
          <span> Html</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="css" />
          <span> Css</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="react" />
          <span> React</span>
        </div>
        <div
          class="w-[80px] h-[100px] px-[10px] flex flex-col items-center mb-[20px]"
        >
          <img :src="vue" />
          <span class="text-center"> Vue</span>
        </div>
        <div class="px-[10px] w-[80px] flex flex-col items-center">
          <img :src="tailwind" />
          <span class="text-center"> Tailwind </span>
        </div>
      </div>
    </div>
    <!-- <p>This is one of the blog most i have written</p>
    <a
      href="https://medium.com/@kristagift/a-react-counter-app-implemented-with-two-methods-react-hook-usereducer-31d2eba832ee"
      target="_blank"
      class="underline"
    >
      How to create a React Counter App</a
    > -->
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

<style scoped>
.icon {
  width: 200px;
  height: 50px;
}
</style>
