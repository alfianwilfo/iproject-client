import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/ListCountry.vue";
import Detail from "../views/Detail.vue";
import Hospital from "../views/Hospital.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
    {
      path: "/hospital",
      name: "hospital",
      component: Hospital,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
