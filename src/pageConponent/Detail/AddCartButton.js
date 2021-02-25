import React from "react";
import { Trans, useTranslation } from "react-i18next";

function AddCartButton({ addCartHandler }) {
    const { t } = useTranslation("translation", { useSuspense: false });
    return (
        <div className="button-add-to-cart" style={{ marginTop: 10 }}>
            <button
                type="button"
                className="btn btn-danger"
                style={{ width: "100%", height: 50 }}
                onClick={() => {
                    addCartHandler();
                }}
            >
                <Trans t={t}>Thêm vào giỏ hàng</Trans>
            </button>
        </div>
    );
}

export default AddCartButton;
