<template>
  <div class="wrappers" id="portfolio">
    <div>
      <h1
        class="flex items-center justify-center font-black text-2xl md:text-4xl my-[35px]"
      >
        PROJECTS
      </h1>
      <div class="container">
        <div>
          <div class="box">
            <img src="../assets/CBT.png" />
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <router-link to="/cbt">
              <button class="text-center">View Project</button>
            </router-link>
          </div>
        </div>
        <div>
          <div class="box">
            <img :src="shopifyPreview" />
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <router-link to="/TheShopify">
              <button>View project</button>
            </router-link>
          </div>
        </div>
        <div>
          <div class="box">
            <img :src="databasePreview" />
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <router-link to="/userDatabase">
              <button>View Website</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from "../assets/database.png";
import calculator from "../assets/calculator.png";
import counterApp from "../assets/counterApp.png";
import shopify from "../assets/e-commerce.png";

export default {
  data: function () {
    return {
      databasePreview: database,
      calculatorPreview: calculator,
      counterAppPreview: counterApp,
      shopifyPreview: shopify,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrappers {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container .box {
  position: relative;
  width: 275px;
  height: 165px;
  margin: 10px;
  overflow: hidden;
  transition: 0.5s;
  border: 2px solid gray;
}
</style>
