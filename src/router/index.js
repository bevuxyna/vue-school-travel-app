import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: '/home'
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("@/views/Protected.vue"),
    meta: {
      requireAuth: true,
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),

  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/views/Invoices.vue"),
    meta: {
      requireAuth: true,
    }
  },
  {
    path: "/destination/:id/:slug",
    name: "destination",
    component: () => import("@/views/Destination.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists) {
        return { 
          name: "notFound",
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash
        };
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience",
        component: () => import("@/views/Experience.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
});

router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath }}

  }

});

export default router;
