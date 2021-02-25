import { lazy } from "react";
import Forum from "../../pageConponent/forum/Forum";

const UserHome = lazy(() => import("../../pageConponent/Home"));
const Admin = lazy(() => import("../../pageConponent/Admin/index.js"));
const Detail = lazy(() => import("../../pageConponent/Detail"));
const Partner = lazy(() => import("../../pageConponent/Partner"));
const Linhvuc = lazy(() => import("../../pageConponent/LinhVuc"));
const Completed = lazy(() => import("../../pageConponent/completed"));
const Inprogress = lazy(() => import("../../pageConponent/InProgress"));
const ClassRoom = lazy(() => import("../../pageConponent/Classroom"));
const InClass = lazy(() => import("../../pageConponent/inClass/InClass"));
const Cart = lazy(() => import("../../pageConponent/cart"));
const PrivatePolicy = lazy(() => import("../../pageConponent/PrivatePolicyPage"));

const Routes = [
  { path: "/", exact: true, component: UserHome },
  { path: "/admin", exact: false, component: Admin },
  { path: "/detail/:id", exact: true, component: Detail },
  { path: "/partner", exact: true, component: Partner },
  { path: "/linhvuc/:linhvuc", exact: true, component: Linhvuc },
  { path: "/completed", exact: true, component: Completed },
  { path: "/inprogress", exact: true, component: Inprogress },
  { path: "/classroom/:id", exact: true, component: ClassRoom },
  { path: "/inclass/:courseProgressId/:chapterId/:episodeId", exact: true, component: InClass },
  { path: "/cart", exact: true, component: Cart },
  { path: "/privatepolicy", exact: true, component: PrivatePolicy },
  { path: "/forum", exact: true, component: Forum },
];

export default Routes;
