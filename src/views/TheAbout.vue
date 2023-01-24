<script setup></script>
<template>
  <div class="m-4">
    <div>
      <p>
        I am OKoro Gift a Frontend Engineering student at AltSchool Africa and a
        la, I love learning new things and improving myself. My Love for
        learning new things made me transition from Teaching to tech. I am
        currently working on different Frontend Projects to build my skills, I
        am open to Internship and Junior Roles
      </p>
      <!-- <p>
        I am curently working on different Frontend Project to build my skills.I
        am an Avid Learner, I am open to Internship and Junior Roles
      </p> -->
    </div>
    <p>Some of my Skills include:</p>
    <div
      class="justify-center items-center border-2 border-gray-200 my-[30px] p-[50px] w-[70%] mx-[70px]"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-[100px] h-[100px] p-[10px]">
          <img :src="logo" />
          <span> Html</span>
        </div>
        <div class="ml-[100px] w-[100px] h-[100px] p-[10px]">
          <img :src="css" />
          <span> Css</span>
        </div>
        <div class="w-[100px] h-[100px] ml-[100px] p-[10px]">
          <img :src="react" />
          <span> React</span>
        </div>
        <div class="w-[100px] h-[100px] ml-[100px] p-[10px]">
          <img :src="vue" />
          <span class="text-center"> Vue</span>
        </div>
        <div class="ml-[100px] p-[10px]">
          <img :src="tailwind" />
          <span class="text-center"> Tailwind </span>
        </div>
      </div>
    </div>
    <p>This is one of the blog most i have written</p>
    <a
      href="https://medium.com/@kristagift/a-react-counter-app-implemented-with-two-methods-react-hook-usereducer-31d2eba832ee"
      target="_blank"
      class="underline"
    >
      How to create a React Counter App</a
    >
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
