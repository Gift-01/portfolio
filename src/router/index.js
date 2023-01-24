import { createRouter, createWebHistory } from "vue-router";
import TheAbout from "@/views/TheAbout.vue";
import TheBlog from "@/views/TheBlog.vue";
import ContactMe from "@/views/ContactMe.vue";
import ThePortfolio from "@/views/ThePortfolio.vue";
import TheHome from "@/views/TheHome.vue";

const routes = [
  { path: "/", name: "App", component: "App" },
  { path: "/About", name: "TheAbout", component: TheAbout },
  { path: "/Blog", name: "TheBlog", component: TheBlog },
  { path: "/Contact", name: "ContactMe", component: ContactMe },
  { path: "/Portfolio", name: "ThePortfolio", component: ThePortfolio },
  { path: "/TheHome", name: "TheHome", component: TheHome },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active-link",
});

export default router;
