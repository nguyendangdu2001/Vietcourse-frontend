import React, { lazy, Suspense, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { SearchForm } from "./SearchForm";
import { motion } from "framer-motion";

const NoticficationButton = lazy(() => import("./NoticficationButton/NoticficationButton"));
const CartButton = lazy(() => import("./CartButton"));
export const Header = (props) => {
    const auth = useSelector((state) => state.userStatus.auth);
    const { t } = useTranslation("translation", { useSuspense: false });
    const subjectList = useMemo(
        () => [
            { name: "Nghiên cứu khoa học", link: "/linhvuc/cntt" },
            { name: "Công nghệ thông tin", link: "/linhvuc/cntt" },
            { name: "Thiết kế đồ họa", link: "/linhvuc/cntt" },
            { name: "Marketing-Truyền thông", link: "/linhvuc/cntt" },
            { name: "Kinh doanh", link: "/linhvuc/kinhdoanh" },
            { name: "Ngoại ngữ", link: "/linhvuc/cntt" },
            { name: "Âm nhạc", link: "/linhvuc/amnhac" },
            { name: "Khoa học dữ liệu", link: "/linhvuc/cntt" },
            { name: "Khoa học máy tính", link: "/linhvuc/cntt" },
            { name: "Sức khỏe", link: "/linhvuc/cntt" },
        ],
        []
    );

    return (
        <header className={`${auth ? "position-sticky sticky-top" : ""} w-100`}>
            <div className=" d-flex justify-content-be align-content-center align-items-center header mx-auto p-2">
                <Link to="/" className="logo">
                    VietCourses
                </Link>
                <div className="dropdown subject-dropdown d-none d-md-block">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                    >
                        <Trans t={t}>Danh mục</Trans>
                    </button>
                    <div className="dropdown-menu">
                        {subjectList.map((subject, index) => {
                            return (
                                <motion.div
                                    key={subject.name}
                                    initial={{opacity:0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 + 0.2 * index }}
                                >
                                    <Link to={subject.link} className="dropdown-item">
                                        <Trans t={t}>{subject.name}</Trans>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <SearchForm />
                <Suspense fallback={null}>
                    {auth && (
                        <>
                            <NoticficationButton />
                            <CartButton />
                        </>
                    )}
                </Suspense>
            </div>
        </header>
    );
};
export default memo(Header);
