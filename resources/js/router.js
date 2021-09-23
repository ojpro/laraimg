import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/pages/Home.vue'),
    },
    {
        path: "/upload",
        name: "Upload",
        component: () => import('@/views/pages/Upload.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
