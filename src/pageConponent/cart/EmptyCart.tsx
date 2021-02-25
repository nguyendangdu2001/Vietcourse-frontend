import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export const EmptyCart = () => {
    const history = useHistory();
    const { t } = useTranslation("translation", { useSuspense: false });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>
                        <Trans t={t}>Không có khoá học nào trong giỏ</Trans>
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="list-empty">
                        <img
                            src="/Images/empty-cart.png"
                            alt=""
                            style={{ width: 126, height: 120, marginBottom: 30 }}
                        />
                        <p>
                            <Trans t={t}>Giỏ hàng đang trống,tiếp tục mua sắm để tìm được khoá học ưng ý nào</Trans>
                        </p>
                        <button type="button" className="btn btn-danger" onClick={() => history.push("/home")}>
                            <Trans t={t}>Tiếp tục mua sắm</Trans>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EmptyCart;
