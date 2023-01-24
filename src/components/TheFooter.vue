<template>
  <footer
    class="bg-gray-600 shadow-lg relative bottom-0 absolute h-[80px] flex items-center"
  >
    <div class="w-full flex items-center justify-center px-6">
      <p>OKORO GIFT</p>
      <img :src="copyrightLogo" class="w-[10px] h-[10px] flex flex-wrap" />
      <span class=""> 2023</span>
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
<style scoped>
footerrt {
  display: flex;
  background-color: #42b942;
  height: 50px;
  width: 100%;
  position: fixed;
}
</style>
