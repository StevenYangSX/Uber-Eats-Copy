// component A seconde level routes

import A1 from "../views/A1";
import A2 from "../views/A2";
import A3 from "../views/A3";

const aRoutes = [
  {
    redirect: true,
    from: "/a",
    to: "/a/a1",
    exact: true,
  },
  {
    path: "/a/a1",
    component: A1,
    name: "/a/a1",
    meta: {},
    children: [],
  },
  {
    path: "/a/a2",
    component: A2,
    name: "/a/a2",
    meta: {},
    children: [],
  },
  {
    path: "/a/a3",
    component: A3,
    name: "/a/a3",
    meta: {},
    children: [],
  },
];
export default aRoutes;
