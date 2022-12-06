import { createRouter, createWebHistory } from "vue-router";
import TopHundred from "../views/Top100.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/top100",
      name: "TopHundred",
      component: TopHundred,
    },
    { path: "/", redirect: { name: "" } },
  ],
});

export default router;
