<template>
  <div class="pt-[130px] pb-[100px] relative" id="blog">
    <div class="flex items-center justify-center">
      <div>
        <h1
          class="flex items-center justify-center font-black text-2xl md:text-5xl mb-[25px]"
        >
          BLOG
        </h1>
        <div
          class="px-[20px] flex md:unset flex-col items-center md:px-0 md:w-[270px] h-[395px]"
        >
          <img
            :src="counterApp"
            class="w-[200px] mb-[20px] md:mb-0 h-[250px] mt-[70px] md:mt-[153px]"
          />
          <h2 class="flex text-lg">
            A React Counter App Implemented with two Methods -React Hooks and
            UseReducer
          </h2>
          <p class="text-sm">
            Most Frontend Developers use React because it is a Javascript
            Library for building interactive user interfaces.<br />One reason
            for building a ...
          </p>
          <a
            href="https://medium.com/@kristagift/a-react-counter-app-implemented-with-two-methods-react-hook-usereducer-31d2eba832ee"
            target="_blank"
            class="underline hover:text-gray-50"
            >Read More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import counterApp from "../assets/counterApp.png";

export default {
  data: function () {
    return {
      counterApp: counterApp,
    };
  },
};
</script>
