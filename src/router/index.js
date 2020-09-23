import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

Vue.mixin({

  data: function() {

    return {

      courses: [
        {"key":"CMSC-2133","value":{
            "code":"CMSC-2133",
            "name":"Spaghetti Programming",
            "desc":"Covers object oriented design and implementation issues. Topics include an introduction to modeling tools (e.g, UML), abstraction, inheritance, polymorphism, memory management, and common design patterns. The course also provides an introduction to event handling and GUI development using relevant class libraries",
            "credits":"4",
            "professor":"David North",
            "semester":"Fall 2020",
            "room":"PEC 233",
            "time":"MWF 10:00AM"
        }},
        {"key":"CMSC-2413","value":{
            "code":"CMSC-2413",
            "name":"Assembly Language",
            "desc":"An introduction to assembly language concepts and programming. The topics include binary and hexadecimal number systems, data representation methods, addressing techniques and subroutines. This course is normally offered in the fall semseter.",
            "credits":"4",
            "professor":"Don Leftwitch",
            "semester":"Fall 2020",
            "room":"PEC 233",
            "time":"MWF 9:15AM"
        }},
        {"key":"CMSC-1113","value":{
            "code":"CMSC-1113",
            "name":"Programming I",
            "desc":"An introduction to the discipline of computing. The course has three major objectives: to present computing as a discipline, to develop skills in problem solving using a computer and to teach the software development process. This course includes laboratory experiences in computer science.",
            "credits":"4",
            "professor":"Ralph Debord",
            "semester":"Fall 2020",
            "room":"HSH 207",
            "time":"MWF 10:00AM"
        }}
        ]

    }

  }

})

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: "/listview",
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
