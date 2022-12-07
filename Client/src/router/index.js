import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/ListCountry.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/list",
      name: "home",
      component: Home,
    },
    {
      path: "/country/:name",
      name: "detail",
      component: Detail,
    },
  ],
});

export default router;
