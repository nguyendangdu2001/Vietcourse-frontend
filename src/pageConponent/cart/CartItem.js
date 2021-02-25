import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export const CartItem = ({ course, removeCartItemHandler }) => {
  const { t } = useTranslation("translation", { useSuspense: false });
  return (
    <div className="course-in-cart" key={course._id}>
      <div className="course-image">
        <Link to={`/detail/${course._id}`}>
          <img src={course.pic} alt="" style={{ width: 130, height: 73 }} />
        </Link>
      </div>
      <div className="course-info">
        <Link to={`/detail/${course._id}`}>
          <div className="course-name">{course.title}</div>
          <span className="author-name">{course.university}</span>
        </Link>
        <div className="course-price">
          <div>
            <span>
              {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                course.price
              )}
            </span>
          </div>
          <div className="price-tag">
            <i className="fas fa-tag"></i>
          </div>
        </div>
      </div>
      <div className="cart-item-action">
        <span
          onClick={() => {
            removeCartItemHandler(course._id);
          }}
        >
          <Trans t={t}>Bỏ khỏi giỏ hàng</Trans>
        </span>
        <Link to={`/detail/${course._id}`}>
          <Trans t={t}>Đi đến khóa học</Trans>
        </Link>
      </div>
    </div>
  );
};
export default memo(CartItem);
