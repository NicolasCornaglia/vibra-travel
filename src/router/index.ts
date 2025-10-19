import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import GroupsPage from "../components/pages/GroupsPage.vue";
import CorporatePage from "../components/pages/CorporatePage.vue";
import WhyVibraPage from "../components/pages/WhyVibraPage.vue";
import ContactPage from "../components/pages/ContactPage.vue";
import LegalPage from "../components/pages/LegalPage.vue";
import SchoolsPage from "../components/pages/SchoolsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/groups",
    name: "Groups",
    component: GroupsPage,
  },
  {
    path: "/corporate",
    name: "Corporate",
    component: CorporatePage,
  },
  {
    path: "/schools",
    name: "Schools",
    component: SchoolsPage,
  },
  {
    path: "/why-vibra",
    name: "WhyVibra",
    component: WhyVibraPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/legal",
    name: "Legal",
    component: LegalPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
