import Login from "@/view/login/index.vue";

export default [
  {
    component: () => import("@/view/error/404.vue"),
    name: "notFound",
    path: "*"
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    name: "login",
    path: "/login",
    component: Login
  }
];
