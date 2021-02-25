import React, { lazy, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import CartItem from "./CartItem";
import { Trans, useTranslation } from "react-i18next";
import { fetchUserData } from "../../Redux/action/userAction";
import { AnimatePresence, motion } from "framer-motion";
import { TDispatch } from "../../types/thunkAction";
import { useCart } from "../../common/hooks/useCart";
import { Button } from "@material-ui/core";
import { useCartMutation } from "../../common/hooks";
const EmptyCart = lazy(() => import("./EmptyCart"));

export const CartMain = () => {
  // const { userId, userCart } = useSelector<AppStateType, { userId: string; userCart: string[] }>(
  //   ({ userStatus }) => ({
  //     userId: userStatus.userInfo._id,
  //     userCart: userStatus.userInfo.cart,
  //   })
  // );
  const [cart] = useCart();
  const { removeCart } = useCartMutation();
  const total =
    cart &&
    cart.reduce((sum = 0, course) => {
      return sum + course.price;
    }, 0);
  const history = useHistory();
  const dispatch = useDispatch<TDispatch>();
  const { t } = useTranslation("translation", { useSuspense: false });

  const removeCartItemHandler = useCallback(
    (id) => {
      removeCart(id);
    },
    [removeCart]
  );
  const paymentSuccessHandler = useCallback(async () => {
    await Axios.post(`${nodeApiLink}/api/users/buy`, {
      courses:
        cart &&
        cart.map((course) => {
          return course._id;
        }),
      total,
    });
    history.push("/");
    dispatch(fetchUserData());
  }, [cart, dispatch, history, total]);
  return cart && cart?.length > 0 ? (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>
            <Trans t={t}>Có {{ inCartNum: cart.length }} khoá học trong giỏ</Trans>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9 my-2">
          <div className="left" style={{ boxShadow: "0 0 2px #dedfe0" }}>
            <AnimatePresence>
              {cart.map((course) => {
                return (
                  <motion.div
                    layout
                    key={course._id}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CartItem course={course} removeCartItemHandler={removeCartItemHandler} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="right">
            <div className="price-text">
              <div className="total">
                <Trans t={t}>Tổng hóa đơn</Trans>:
              </div>
              <div className="price-large">
                {total
                  ? new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(total)
                  : 0}
              </div>
              <div className="space"></div>
              <Button onClick={paymentSuccessHandler} fullWidth>
                Mua
              </Button>
              {/* <PayPalButton
                amount={
                  cart?.length
                    ? cart.reduce((sum = 0, course) => {
                        return sum + course.price;
                      }, 0)
                    : 0
                }
                onSuccess={paymentSuccessHandler}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};
export default memo(CartMain);
