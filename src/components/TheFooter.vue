<template>
  <footer
    class="bg-gray-600 relative bottom-0 h-[80px] w-full flex items-center overscroll-y-none"
  >
    <div class="w-full flex items-center justify-center px-6">
      <p>OKORO GIFT</p>
      <img :src="copyrightLogo" class="w-[10px] h-[10px] flex flex-wrap" />
      <span> 2023</span>
    </div>
  </footer>
</template>
<script>
import copyright from "../assets/copyright.svg";

export default {
  data: function () {
    return {
      copyrightLogo: copyright,
    };
  },
};
</script>
