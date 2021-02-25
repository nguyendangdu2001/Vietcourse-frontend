import "./config/i18n/i18n";
import "./style/Style.css";
import React, { lazy, Suspense, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollToTop } from "./common/components/Functional/ScrollToTop";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { fetchUserData } from "./Redux/action/userAction";
import GetRoutes from "./config/Route/GetRoutes";
import { Header } from "./common/components/Header";
import { AppStateType } from "./Redux/reducer";
import { UserRole } from "./types/user";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const UserNav = lazy(() => import("./common/components/Nav/UserNav"));
const GuestNav = lazy(() => import("./common/components/Nav/GuestNav"));
const Footer = lazy(() => import("./common/components/Footer"));
const GoogleOneTapSignUp = lazy(() => import("./common/components/GoogleOneTapSignUp"));
const ScrollTopButton = lazy(() => import("./common/components/ScrollToTopButton/ScrollTopButton"));

Axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

function App() {
  const auth = useSelector<AppStateType, boolean>(({ userStatus }) => userStatus.auth);
  const role = useSelector<AppStateType, UserRole[]>(
    ({ userStatus }) => userStatus.userInfo && userStatus.userInfo.roles
  );
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  useEffect(() => {
    console.log(role.includes(UserRole.Admin));
    if (!role) return;
    if (role.includes(UserRole.Admin)) history.push("/admin");
  }, [history, role]);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ position: "absolute" }} id="back-to-top-anchor" />
      <Header />
      <Suspense fallback={null}>{auth ? <UserNav /> : <GuestNav />}</Suspense>
      <GetRoutes />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <Suspense fallback={null}>
        <ScrollTopButton />
      </Suspense>
      {/* <Suspense fallback={null}>{!auth && <GoogleOneTapSignUp />}</Suspense> */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
export default memo(App);
