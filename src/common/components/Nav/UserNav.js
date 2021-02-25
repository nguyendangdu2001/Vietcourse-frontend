import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link, useHistory } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { UserBrief } from "./UserBrief";
import { logout } from "../../../Redux/action/userAction";

export function UserNav() {
  const role = useSelector(({ userStatus }) => userStatus.userInfo && userStatus.userInfo.roles);
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation("translation");
  const useStyle = makeStyles((theme) => ({
    button: {
      fontFamily: "inherit",
      textTransform: "inherit",
      "&:hover": {
        background: "none",
      },
    },
    ava: { width: 56, height: 56, margin: 12 },
  }));
  const classes = useStyle();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  const userNav = [
    { link: "/", title: "Trang chủ", icon: <i className="fas fa-home"></i> },
    { link: "/inprogress", title: "Khoá học của tôi", icon: <i className="fas fa-book"></i> },
    { link: "/completed", title: "Đã hoàn thành", icon: <i className="fas fa-history"></i> },
    { link: "/forum", title: "Forum", icon: <i className="fas fa-book"></i> },
  ];
  const adminNav = [
    { link: "/admin", title: "Trang Chủ", icon: <i className="fas fa-home"></i> },
    {
      link: "/admin/lecturers",
      title: "Giảng Viên",
      icon: <i className="fas fa-chalkboard-teacher"></i>,
    },
    { link: "/admin/users", title: "Học sinh", icon: <i className="fas fa-user-graduate"></i> },
    { link: "/admin/courses", title: "Khóa học", icon: <i className="fas fa-book"></i> },
    { link: "/admin/categories", title: "Danh mục", icon: <i className="fas fa-book"></i> },
  ];
  const displayNav = role.includes("admin") ? adminNav : userNav;
  return (
    <nav className="user-nav position-fixed h-100">
      <div className="bg-gradient">
        <div className="navbar d-flex flex-md-column p-0">
          <ul className="navbar-nav d-flex flex-md-column navbar-expand">
            <li className="nav-item">
              <UserBrief />
            </li>
            {displayNav.map((item) => {
              const { link, title, icon } = item;
              return (
                <li className="nav-item" key={title}>
                  <Link to={link} className="nav-link">
                    {icon}
                    <span className="link-text d-none d-md-block">
                      <Trans t={t}>{title}</Trans>
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item" style={{ order: 4 }}>
              <Button onClick={logoutHandler} className={`nav-link ${classes.button}`}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="link-text d-none d-md-block">
                  <Trans t={t}>Đăng xuất</Trans>
                </span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="myshadow"></div>
    </nav>
  );
}
export default memo(UserNav);
