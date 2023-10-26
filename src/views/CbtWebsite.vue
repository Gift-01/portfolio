<template>
  <div class="w-full h-full p-8 md:p-20">
    <div>
      <h1 class="flex text-center justify-center text-3xl font-medium">
        CBT WEBSITE
      </h1>
      <p class="my-[20px] py-[20px] flex text-left">
        CBT is a Vue Website built to allow student login and take their
        examination and also allow Adming Login and upload exam Questions. I
        built this Application from scratch with Vue,Axios,pinia,TailwindCSS and
        Vue Router.This CBT website requires Admin to be authenticated before
        they can upload exam questions, add other admins, delete and edit exam
        questions .
      </p>
      <div class="flex">
        <div class="flex flex-col gap-y-[10px]">
          <h2 class="font-bold">STACK</h2>
          <p>Vue</p>
          <p>Axios</p>
          <p>TailwindCSS</p>
          <p>Vue Router</p>
          <p>Pinia</p>
          <p>TinyMCEEditor</p>
        </div>
        <div>
          <h2 class="font-bold">LIVE</h2>
          <p class="text-red-800 text-sm">
            This Website is currently in progress
          </p>
        </div>
      </div>
    </div>
    <img src="../assets/CBT.png" class="py-[30px]" />
    <div class="flex flex-col items-end">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px] mb-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Web stack and Explaination</h2>
        <p>
          <b>Vue</b> was used to build this Website because of it light weight
        </p>
        <p>
          <b> Pinia</b> was used to store and manage the user Data and enhance
          code organization,reusability and maintainability.
        </p>
        <p>
          <b> TinyMCEEditor</b> was used for formatting and inputing text and
          multimedia content.
        </p>
        <p>
          <b> Vue-Router</b> was used to manage the Navigation and routing
          aspect of this Website.
        </p>

        <p><b> Tailwind CSS</b> was used to style this Website.</p>
      </div>
    </div>
    <!-- <div class="flex flex-col items-start">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">
          Problems and Thought Process
        </h2>
        <p>
          Like Most Projects, I ran into a few bumps on the way, one particular
          area is Route Guard. I realized how important is it to protect your
          route so that any one does not have acess to your products or page
          without signing up.
        </p>
        <p>I hard to learn how to implement Route Guard and learn more Vuex</p>
      </div>
    </div> -->
    <!-- <img :src="login" alt="" class="py-[30px]" />
    <img :src="products" alt="" class="py-[30px]" /> -->
    <!-- <div class="flex flex-col items-end py-[30px]">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Lessons Learned</h2>
        <p>
          This is my first vue project and I learnt a lot of lesson Some of the
          most important lesson I learnt during this project are:
        </p>
        <ol class="list-decimal pl-4">
          <li>AuthGuard</li>
          <li>API Integration</li>
          <li>Vuex</li>
          <li>VUe Router</li>
          <li>Authentication</li>
        </ol>
      </div>
    </div> -->
    <div>
      <h2 class="font-bold text-2xl pb-[10px]">Other Projects</h2>
      <img :src="database" alt="" class="py-[30px] w-[30%]" />
      <h2 class="font-bold text-2xl pb-[10px]">userDatabase</h2>
      <p>A web application that fetch random user database</p>
      <a
        href="https://gift-random-user-database.netlify.app/"
        class="text-red-900 hover:underline"
        >view project</a
      >
      <contactme />
    </div>
  </div>
</template>

<script>
import Shopify from "../assets/e-commerce.png";
import login from "../assets/login.png";
import products from "../assets/products.png";
import database from "../assets/database.png";
import contactme from "./ContactMe.vue";

export default {
  components: { contactme },

  data: function () {
    return {
      Shopify: Shopify,
      login: login,
      products: products,
      database: database,
    };
  },
};
</script>
