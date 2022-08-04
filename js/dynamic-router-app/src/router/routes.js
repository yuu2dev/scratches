import MainLayout from "src/layouts/MainLayout.vue";
import ShopIndexPage from "src/pages/shop/IndexPage.vue";
import AdminIndexPage from "src/pages/admin/IndexPage.vue";
const createShopRoute = () => {
    return {
        name: "shop",
        path: "/shop",
        children: [
            {
                name: "shop-index",
                path: "/shop",
                component: ShopIndexPage,
            },
        ],
    };
};
const createAdminRoute = () => {
    return {
        name: "admin",
        path: "/admin",
        children: [
            {
                name: "admin-index",
                path: "/admin",
                component: AdminIndexPage,
            },
        ],
    };
};
const createRoutes = (mode) => {
    let children = [];
    if (mode === "admin") {
        children = [createAdminRoute()];
    } else {
        children = [createShopRoute()];
    }
    return [
        {
            path: "/",
            component: MainLayout,
            children,
        },
        {
            path: "/:catchAll(.*)*",
            component: () => import("pages/ErrorNotFound.vue"),
        },
    ];
};
export default createRoutes;
