import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("./layout/root-layout.tsx", [
        index("./pages/home/home.tsx"),
        route("/docs", "./pages/docs/docs.tsx"),
        route("*", "./pages/error/not-found.tsx"),
    ]),
] satisfies RouteConfig;
