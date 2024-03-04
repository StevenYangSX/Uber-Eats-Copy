/* 
    router config array.
    each element is a single route rule
        + redirect : true   config for redirect
        + from : 
        + to :
        + exact : boolean  if exact.
        + path :  route path
        + component :  component to render
        + name :    routes name
        + meta : {}  route meta data
        + children:[]   children routes
*/
import A from "../views/A";
// import B from "../views/B";
// import C from "../views/C";
import aRoutes from "./aRoutes";

import { lazy } from "react";

const routes = [
  { redirect: true, from: "/", to: "/a", exact: true },
  {
    path: "/a",
    component: A,
    name: "/a",
    meta: {},
    children: aRoutes,
  },
  {
    path: "/b",
    component: lazy(() => import("../views/B")),
    name: "/b",
    meta: {},
    children: [],
  },
  {
    path: "/c",
    component: lazy(() => import("../views/C")),
    name: "/c",
    meta: {},
    children: [],
  },
  { redirect: true, to: "/a" },
];

export default routes;
