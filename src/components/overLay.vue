<template>
  <div class="overlay">
    <div class="content">
      <h3>REACT</h3>
      <p>CSS</p>
    </div>
  </div>
</template>
<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  background-color: black;
  cursor: pointer;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: Verdana;
  text-align: center;
}
</style>

<!-- <template>
  <div>
    <div
      class="flex flex-col md:flex-row justify-center justify-items-center mt-4"
    >
      <div class="border-solid border-4 border-light-blue-500">
        <img :src="databasePreview" class="w-[700px] h-[400px]" />
        <div class="overlay">
          <h1 class="text">REACT</h1>
          <span class="text">CSS</span>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <a
            href="https://gift-random-user-database.netlify.app/"
            target="_blank"
            class="rounded-lg border-2 border-gray-500 bg-gray-700 text-gray-50 hover:bg-gray-50 hover:text-gray-800 m-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <button class="m-2">Live Demo</button>
          </a>
          <a href="">
            <button>Github</button>
          </a>
        </div>
      </div>
      <div class="border-solid border-4 border-light-blue-500">
        <img :src="calculatorPreview" class="w-[800px] h-[400px]" />
        <div class="flex items-center justify-center space-x-4">
          <a
            href="https://gift-react-calculator.netlify.app/"
            target="_blank"
            class="rounded-lg border-2 border-gray-500 bg-gray-700 text-gray-50 hover:bg-gray-50 hover:text-gray-800 m-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <button class="m-2">Live Demo</button>
          </a>
          <a href="">
            <button>Github</button>
          </a>
        </div>
      </div>
      <div class="border-solid border-4 border-light-blue-500">
        <img :src="counterAppPreview" class="w-[700px] h-[400px]" />
        <div class="flex items-center justify-center space-x-4">
          <a
            href="https://gift-counter-app.netlify.app/"
            target="_blank"
            class="rounded-lg border-2 border-gray-500 bg-gray-700 text-gray-50 hover:bg-gray-50 hover:text-gray-800 m-2 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <button class="m-2">Live Demo</button>
          </a>
          <a href="">
            <button>Github</button>
          </a>
        </div>
      </div>
    </div>
    <div>
      <p>React</p>
    </div>
  </div>
</template> -->
