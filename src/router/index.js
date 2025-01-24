import { createRouter, createWebHistory } from "vue-router";
const NewView = () => import("../views/NewView.vue");
const OldView = () => import("../views/OldView.vue");

const routes = [
  {
    path: "/",
    name: "New",
    component: NewView,
  },
  {
    path: "/old",
    name: "Old",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OldView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
