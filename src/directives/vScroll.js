// const vScroll = {
//   mounted: (el) => {
//     el.style.cursor = "pointer";
//     el.addEventListener("click", () => {
//       const coord = el.getBoundingClientRect().bottom + window.scrollY; //(1)
//       window.scroll({ bottom: coord, behavior: "smooth" }); //(2)
//     });
//   },
// };

const vScroll = {
  mounted: (el, binding) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      let coord = 0;
      coord = binding.value
        ? el.getBoundingClientRect().bottom + window.scrollY + binding.value
        : el.getBoundingClientRect().bottom + window.scrollY;
      window.scroll({ bottom: coord, behavior: "smooth" });
    });
  },
};

export default vScroll;
