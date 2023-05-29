<template>
  <nav
    class="bg-gray-600 fixed top-0 w-full z-[99] shadow-lg h-[px] md:h-[100px]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <p class="text-gray-300 pt-[1px] md:pt-[50px]">Okoro Gift</p>
        </div>
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4 pt-[50px]">
              <button
                @click="scroll('about')"
                class="text-gray-300 hover:text-white hover:text-xl px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </button>
              <button
                @click="scroll('skills')"
                class="text-gray-300 hover:text-white hover:text-xl px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </button>
              <button
                @click="scroll('portfolio')"
                class="text-gray-300 hover:text-white hover:text-xl px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </button>
              <button
                @click="scroll('contact')"
                class="text-gray-300 hover:text-white hover:text-xl px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <button
          @click="scroll('about')"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </button>
        <button
          @click="scroll('skills')"
          class="text-gray-300 hover:text-white hover:text-xl px-3 py-2 rounded-md text-base font-medium"
        >
          Skills
        </button>
        <button
          @click="scroll('portfolio')"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Project
        </button>

        <button
          @click="scroll('contact')"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
e>
