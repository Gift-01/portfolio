import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/views/TheHome.vue";
import TheShopify from "../views/TheShopify.vue";
import UserDatabase from "../views/userDatabase.vue";
import CbtWebsite from "../views/CbtWebsite.vue";

const routes = [
  { path: "/", name: "App", component: TheHome },
  { path: "/TheShopify", name: "TheShopify", component: TheShopify },
  { path: "/userDatabase", name: "userDatabase", component: UserDatabase },
  { path: "/cbt", name: "cbtWebsite", component: CbtWebsite },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active-link",
});

export default router;
