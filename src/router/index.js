import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/views/TheHome.vue";
import TheShopify from "../views/TheShopify.vue";
import CareFinder from "../views/CareFinder.vue";
import UserDatabase from "../views/userDatabase.vue";

const routes = [
  { path: "/", name: "App", component: TheHome },
  { path: "/TheShopify", name: "TheShopify", component: TheShopify },
  { path: "/CareFinder", name: "CareFinder", component: CareFinder },
  { path: "/userDatabase", name: "userDatabase", component: UserDatabase },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active-link",
});

export default router;
