<template>
  <div
    :class="open ? 'h-[258px] md:h-[100px]' : 'h-[100px]'"
    class="fixed top-0 w-full z-[99] bg-gray-600 shadow-lg flex items-center"
  >
    <div
      class="w-full flex items-center justify-between flex-wrap bg-teal px-6"
    >
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
        <div
          class="w-full flex flex-col justify-between md:flex-row text-sm sm:flex-grow"
        >
          <p class="pt-[10px] md:pt-0 text-gray-50 text-xl">Okoro Gift</p>
          <div>
            <button
              @click="scroll('home')"
              class="text-left md:text-center no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:text-lg transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 mr-4 focus:underline hover:font-black hover:underline"
            >
              Home
            </button>

            <button
              @click="scroll('about')"
              class="text-left md:text-center no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 mr-4 focus:underline hover:font-black hover:text-lg"
            >
              About
            </button>
            <button
              @click="scroll('portfolio')"
              class="text-left md:text-center no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:-translate-y-1 transition duration-200 ease-in-out hover:scale-110 mr-4 focus:underline hover:font-black hover:text-lg"
            >
              portfolio
            </button>
            <button
              @click="scroll('blog')"
              class="text-left md:text-center no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 hover:-translate-y-1 hover:scale-110 mr-4 transition duration-200 ease-in-out focus:underline hover:font-black hover:text-lg"
            >
              Blog
            </button>
            <button
              @click="scroll('contact')"
              class="text-left md:text-center no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 focus:underline hover:font-black hover:text-lg mr-4"
            >
              Contact
            </button>
          </div>
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
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
