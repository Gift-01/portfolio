import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/views/TheHome.vue";

const routes = [{ path: "/", name: "App", component: TheHome }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nav-active-link",
});

export default router;
