<template>
  <div class="w-full h-full p-8 md:p-20">
    <div>
      <h1 class="flex text-center justify-center text-3xl font-medium">
        Random user Database
      </h1>
      <p class="my-[20px] py-[20px] flex text-left">
        Random userDatabase is a React Application built to get Fetch user
        Database and also search for Random userDatabase. I built this
        Application from scratch with React.This Random userDatabase allows you
        to search for user database and shows Pagination.
      </p>
      <div class="flex">
        <div class="flex flex-col gap-y-[10px]">
          <h2 class="font-bold">STACK</h2>
          <p>React</p>
          <p>Netlify</p>
        </div>
        <div class="mx-[20px]">
          <h2 class="font-bold">LIVE</h2>
          <a
            href="https://gift-random-user-database.netlify.app/"
            class="text-red-800"
            >view site</a
          >
        </div>
      </div>
    </div>
    <img :src="database" class="py-[30px]" />
    <div class="flex flex-col items-end">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px] mb-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Web stack and Explaination</h2>
        <p>
          <b>React</b> was used to build this Application because of easy
          management Application state
        </p>
        <p>
          <b> Netlify</b> was used for deployment because of it speed and
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
          Like Most Projects, I ran into a few bumps on the way, one particular
          area is Pagination and API integration. I realized how important is it
          to paginate your data in a page to avoid too many data in a page.
        </p>
        <p>
          I learnt how to integrate API and learn how to implement Pagination.
        </p>
        <p>I learnt how to implement Error Boundary.</p>
      </div>
    </div>
    <img :src="error" alt="" class="py-[30px]" />
    <img :src="search" alt="" class="py-[30px]" />
    <img :src="TotalUser" alt="" class="py-[30px]" />
    <div class="flex flex-col items-end py-[30px]">
      <div class="w-[100%] md:w-[30%] flex flex-col gap-y-[20px]">
        <h2 class="font-bold text-2xl pb-[10px]">Lessons Learned</h2>
        <p>
          This is my first React project that involved using React Hooks , API
          integration and Pagination and I learnt a lot of lesson Some of the
          most important lesson I learnt during this project are:
        </p>
        <ol class="list-decimal pl-4">
          <li>Pagination</li>
          <li>API Integration</li>
          <li>React Hooks</li>
          <li>Error Boundary</li>
        </ol>
      </div>
    </div>
    <div>
      <h2 class="font-bold text-2xl pb-[10px]">Other Projects</h2>
      <img :src="database" alt="" class="py-[30px] w-[30%]" />
      <h2 class="font-bold text-2xl pb-[10px]">CareFinder</h2>
      <p>
        A web application that allows user to search for Hospitals around there
        Location.
      </p>
      <h1 class="font-bold text-2xl pb-[10px]">It is a Work in Progress</h1>
      <!-- <a
        href="https://gift-random-user-database.netlify.app/"
        class="text-red-900 hover:underline"
        >view project</a
      > -->
      <ContactMe />
    </div>
  </div>
</template>

<script>
import database from "../assets/database.png";
import ContactMe from "./ContactMe.vue";
import search from "../assets/search.png";
import error from "../assets/error.png";
import TotalUser from "../assets/TotalUser.png";

export default {
  components: { ContactMe },

  data: function () {
    return {
      database: database,
      search: search,
      error: error,
      TotalUser: TotalUser,
    };
  },
};
</script>
