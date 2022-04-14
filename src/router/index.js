import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserList from "../views/UserList.vue";
import SubPage from "../views/SubPage.vue";
// import ManufactureList from "../views/ManufactureList.vue";
// import AboutView from "../views/AboutView.vue";
// import DynamicRouteMatching from "../views/DynamicRouteMatching.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/sub-page",
    name: "SubPage",
    component: SubPage,
  },
  {
    path: "/user-list",
    name: "UserList",
    component: UserList,
  },
  // {
  //   path: "/dynamic-route-matching",
  //   name: "DynamicRouteMatching",
  //   component: DynamicRouteMatching,
  //   props: true, //値を渡すことを許可
  // },
  // {
  //   path: "/manufacture-list",
  //   name: "ManufactureList",
  //   component: ManufactureList,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: AboutView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function (to, from, next) {
  if (to.query.redirect) {
    next("/");
  } else {
    next();
  }
});

export default router;
