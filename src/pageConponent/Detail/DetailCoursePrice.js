import React, { useEffect, useRef } from "react";
import LazyLoad from "react-lazyload";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
import $ from "jquery";
import { useTranslation, Trans } from "react-i18next";
import AddCartButton from "./AddCartButton";
import DeleteFromCartButton from "./DeleteFromCartButton";
import CartLoginRequestButton from "./CartLoginRequestButton";
import { useCartMutation } from "../../common/hooks";

export const DetailCoursePrice = ({ pic, price, id, getCourseHeaderRef }) => {
  const userInfo = useSelector((state) => state.userStatus.userInfo);
  const { addCart, removeCart } = useCartMutation();
  const coursePic = useRef(null);
  const floatingBox = useRef(null);
  const { t } = useTranslation("translation", { useSuspense: false });
  const addCartHandler = () => {
    addCart(id);
  };
  const removeCartItemHandler = () => {
    removeCart(id);
  };
  useEffect(() => {
    const windowScrollHandler = () => {
      const courseHeader = getCourseHeaderRef();
      if (!coursePic.current || !floatingBox || !courseHeader) return;
      const courseHeaderOverWindow = window.scrollY > courseHeader.offsetTop + 100;
      if (courseHeaderOverWindow) {
        coursePic.current.style.width = 0;
        coursePic.current.style.height = 0;
        floatingBox.current.style.position = "fixed";
        floatingBox.current.style.marginTop = "100px";
      } else {
        coursePic.current.style.width = "100%";
        coursePic.current.style.height = "140px";
        floatingBox.current.style.position = "absolute";
        floatingBox.current.style.marginTop = "0px";
      }
    };
    window.addEventListener("scroll", windowScrollHandler);
    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, [getCourseHeaderRef]);
  useEffect(() => {
    $(".heart").hover(function () {
      $("#hearts").removeClass("far fa-heart heartss");
      $("#hearts").addClass("fas fa-heart hearted");
    });
    $(".heart").mouseout(function () {
      $("#hearts").removeClass("fas fa-heart heartss");
      $("#hearts").addClass("far fa-heart hearted");
    });
    return () => {
      $(".heart").unbind();
    };
  }, []);
  return (
    <div className="col-4 d-none d-md-block">
      <div
        className="jsright right-col-content"
        id="right"
        style={{ width: 354, left: "auto", top: 10, position: "absolute" }}
        ref={floatingBox}
      >
        <div className="right-module">
          <div className="image-course">
            {pic ? (
              <LazyLoad height={140} throttle={1000}>
                <img
                  className="course-image"
                  src={pic}
                  alt=""
                  style={{
                    width: "100%",
                    height: 140,
                    transition: ".5s ease-in-out",
                  }}
                  ref={coursePic}
                />
              </LazyLoad>
            ) : (
              <Skeleton variant="rect" animation="wave" style={{ width: "100%", height: 140 }} />
            )}
          </div>
          <div className="right-content">
            <div className="Detail-floating">
              <div className="buy">
                <div className="price">
                  <div className="now-price">
                    <span className="course-price-now">{price} VND</span>
                  </div>
                  <div className="non-purchase">
                    <span className="heart">
                      <i id="hearts" className="far fa-heart heartss"></i>
                    </span>
                  </div>
                </div>
                <div className="confirm-buy">
                  {userInfo ? (
                    userInfo.cart.includes(id) ? (
                      <DeleteFromCartButton removeCartItemHandler={removeCartItemHandler} />
                    ) : (
                      <AddCartButton addCartHandler={addCartHandler} />
                    )
                  ) : (
                    <CartLoginRequestButton />
                  )}
                </div>
              </div>
              <div className="includes">
                <ul className="list">
                  <li>
                    <i className="far fa-clock"></i>
                    <span>
                      <Trans t={t}>20h học</Trans>
                    </span>
                  </li>
                  <li className="list-item">
                    <i className="far fa-file"></i>
                    <span>
                      150 <Trans t={t}>bài viết</Trans>
                    </span>
                  </li>
                  <li className="list-item">
                    <i className="fas fa-heartbeat"></i>
                    <span>
                      <Trans t={t}>Truy cập trọn đời</Trans>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
