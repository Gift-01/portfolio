<template>
  <div class="wrappers" id="portfolio">
    <div>
      <h1>Project</h1>
      <div class="container">
        <div>
          <div class="box">
            <div class="imgbx">
              <img :src="databasePreview" />
            </div>
            <div class="content">
              <div>
                <h2>React</h2>
                <p>An App that stores user database</p>
              </div>
            </div>
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <a
              href="https://gift-random-user-database.netlify.app/"
              target="_blank"
            >
              <button>View Website</button>
            </a>
          </div>
        </div>
        <div>
          <div class="box">
            <div class="imgbx">
              <img :src="calculatorPreview" />
            </div>
            <div class="content">
              <div>
                <h2>React</h2>
                <h2>Css</h2>
                <p>A Calculator</p>
              </div>
            </div>
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <a
              href="https://gift-react-calculator.netlify.app/"
              target="_blank"
            >
              <button>View Website</button>
            </a>
          </div>
        </div>
        <div>
          <div class="box">
            <div class="imgbx">
              <img :src="counterAppPreview" />
            </div>
            <div class="content">
              <div>
                <h2>React Css</h2>
                <p>A counter App</p>
              </div>
            </div>
          </div>
          <div
            class="border-solid border-2 border-light-blue-500 rounded-md text-center p-2 m-6 text-gray-100 bg-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <a href="https://gift-counter-app.netlify.app/" target="_blank">
              <button class="text-center">View Website</button>
            </a>
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

export default {
  data: function () {
    return {
      databasePreview: database,
      calculatorPreview: calculator,
      counterAppPreview: counterApp,
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
  height: 275px;
  margin: 10px;
  overflow: hidden;
  transition: 0.5s;
  border: 2px solid gray;
  padding: 30px;
}

.container .box:hover {
  z-index: 1;
  transform: scale(1.25);
  box-shadow: 0 25px 40px rgba(0, 0, 0 0.5);
}

.container .box .imgbx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container .box .imgbx:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(180deg, #000, rgb(233, 230, 230));
  mix-blend-mode: multiply;
  opacity: 0;
  transition: 0.5s;
}
.container .box:hover .imgbx:before {
  opacity: 1;
}

.container .box .imgbx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  padding: 20px;
  align-items: flex-end;
}

.container .box .content h2 {
  color: #fff;
  transition: o.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
}

.container .box:hover .content h2 {
  transform: translateY(0);
  transition-delay: 0.6s;
}

.container .box .content p {
  color: #fff;
  transform: translateY(200px);
  transition-delay: 0.5s;
  font-size: 14px;
}

.container .box:hover .content p {
  transform: translateY(0);
  transition-delay: 0.7s;
}
</style>
