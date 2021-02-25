import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useLoginPopup } from "../../common/components/AuthPopup/LoginPopupProvider";

function CartLoginRequestButton(props) {
    const { t } = useTranslation("translation", { useSuspense: false });
    const { changePopupState } = useLoginPopup();
    return (
        <div className="button-buy-now" style={{ marginTop: 10 }}>
            <button
                type="button"
                id="login2"
                className="btn btn-primary"
                style={{ width: "100%", height: 50 }}
                onClick={()=>{changePopupState({show:true})}}
            >
                <Trans t={t}>Đăng nhập để thêm vào giỏ hàng</Trans>
            </button>
        </div>
    );
}

export default CartLoginRequestButton;
