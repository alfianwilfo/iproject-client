import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import TopHundred from "../views/Top100.vue";
import DetailPage from "../views/Detail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/top100",
      name: "TopHundred",
      component: TopHundred,
    },
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/movie/:id", name: "detail", component: DetailPage },
  ],
});

export default router;
