<template>
  <div class="w-full h-full p-8 md:p-20">
    <div>
      <h1 class="flex text-center justify-center text-3xl font-medium">
        Shopify
      </h1>
      <p class="my-[20px] py-[20px] flex text-left">
        Shopify is a Vue Application built to get product from an e-commerce
        site. I built this Application from scratch with Vue, Vuex and Vue
        Router.This e-commerce application requires user to be authenticated
        before it routes you to the product page where you can view the product.
      </p>
      <div class="flex">
        <div class="flex flex-col gap-y-[10px]">
          <h2 class="font-bold">STACK</h2>
          <p>Vue</p>
          <p>Vuex</p>
          <p>CSS</p>
          <p>Vue Router</p>
          <p>Netlify</p>
        </div>
        <div>
          <h2 class="font-bold">LIVE</h2>
          <a
            href="https://heroic-centaur-1f4075.netlify.app/"
            class="text-red-800"
            >view site</a
          >
        </div>
      </div>
    </div>
    <img :src="Shopify" class="py-[30px]" />
    <div class="flex flex-col items-end">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px] mb-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Web stack and Explaination</h2>
        <p>
          <b>Vue</b> was used to build this Application because of it light
          weight and
        </p>
        <p>
          <b> Vuex</b> was used to store and manage the user Data and enhance
          code organization,reusability and maintainability.
        </p>
        <p>
          <b> Netlify</b> was used for deployment because of it speed and
          reliability.
        </p>
        <p>
          <b> Vue-Router</b> was used for deployment because of it speed and
          reliability.
        </p>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">
          Problems and Thought Process
        </h2>
        <p>
          Like Most Projects, i ran into a few bumps on the way, one particular
          area is Route Guard. I realized how important is it to protect your
          route so that any one does not have acess to your products or page
          without signing up.
        </p>
        <p>I hard to learn how to implement Route Guard and learn more Vuex</p>
      </div>
    </div>
    <img :src="login" alt="" class="py-[30px]" />
    <img :src="products" alt="" class="py-[30px]" />
    <div class="flex flex-col items-end py-[30px]">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Lessons Learned</h2>
        <p>
          This is my first vue project and i learnt a lot of lesson Some of the
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
    </div>
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
      <ContactMe />
    </div>
  </div>
</template>

<script>
import Shopify from "../assets/e-commerce.png";
import login from "../assets/login.png";
import products from "../assets/products.png";
import database from "../assets/database.png";
import ContactMe from "./ContactMe.vue";

export default {
  components: { ContactMe },

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
