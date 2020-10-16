import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/list",
    name: "ListView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/listview.vue")
  },
  {
    path: "/edit/:id",
    name: "Edit",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/edit.vue")
  },
  {
    path:"/new",
    name:"New",
    props: true,
    component: () =>
      import("../views/edit.vue")
  },
  {
    path:"/students",
    name:"StudentList",
    props: true,
    component: () =>
      import("../views/studentlist.vue")
  },
  {
    path:"/plan",
    name:"Plan",
    props: true,
    component: () =>
      import("../views/buildPlan.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;