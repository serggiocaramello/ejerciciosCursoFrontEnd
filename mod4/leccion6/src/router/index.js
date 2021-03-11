import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Router2 from "../views/Router2.vue";
import Router3 from "../views/Router3.vue";
import Router4 from "../views/Router4.vue";
import Router5 from "../views/Router5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/router2",
    name: "Router 2",
    component: Router2
  },
  {
    path: "/router3",
    name: "Router 3",
    component: Router3
  },
  {
    path: "/router4",
    name: "Router 4",
    component: Router4
  },
  {
    path: "/router5",
    name: "Router 5",
    component: Router5
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
