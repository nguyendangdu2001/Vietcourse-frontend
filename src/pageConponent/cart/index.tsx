import './style/not_empty.css'
import './style/empty.css'
import './style/cart-header.css'
import React, { useEffect, memo } from "react";
import { CartMain } from "./CartMain";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { AppStateType } from '../../Redux/reducer';

export const Cart = () => {
    const auth = useSelector<AppStateType>((state) => state.userStatus.auth);
    const history = useHistory();
    const { t } = useTranslation("translation",{useSuspense:false});
    useEffect(() => {
        if (!auth) history.push("/");
        return () => {
            //
        };
    }, [auth, history]);
    return (
        <div className="content" style={{ minHeight: 800 }}>
            <div className="cart-header">
                <div className="container">
                    <div className="header-bar">
                        <div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">
                                        <i className="fas fa-home"></i>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                <Trans t={t}>Giỏ hàng</Trans>
                                </li>
                            </ol>
                            <h1><Trans t={t}>Thẻ mua sắm</Trans></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space">
                <div className="space-item"></div>
            </div>
            <CartMain />
        </div>
    );
};
export default memo(Cart);
