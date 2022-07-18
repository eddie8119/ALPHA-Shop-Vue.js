import Vue from "vue";
import VueRouter from "vue-router";
import CheckOut from "../views/CheckOut";

Vue.use(VueRouter);

// VueRouter??
const router = new VueRouter({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/checkout",
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOut,
    },
    {
      path: "*",
      name: "not-fount",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
