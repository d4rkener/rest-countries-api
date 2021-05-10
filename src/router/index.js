import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryDetail from "../views/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: CountryDetail,
    params: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
