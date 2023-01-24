<template>
  <div class="bg-gray-600 shadow-lg h-[100px] flex items-center">
    <div class="flex items-center justify-between flex-wrap bg-teal px-6">
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow">
          <router-link
            to="/TheHome"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-black mr-4 focus:underline"
          >
            Home
          </router-link>

          <router-link
            to="/About"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-black mr-4 focus:underline"
          >
            About
          </router-link>
          <router-link
            to="/Portfolio"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-black mr-4 focus:underline"
          >
            portfolio
          </router-link>
          <router-link
            to="/Blog"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-black mr-4 focus:underline"
          >
            Blog
          </router-link>
          <router-link
            to="/contact"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-black hover:underline focus:underline mr-4"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
