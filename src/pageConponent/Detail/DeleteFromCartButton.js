import React from "react";
import { Trans, useTranslation } from "react-i18next";

function DeleteFromCartButton({removeCartItemHandler}) {
    const { t } = useTranslation("translation", { useSuspense: false });
    return (
        <div className="button-add-to-cart" style={{ marginTop: 10 }}>
            <button
                type="button"
                className="btn btn-danger"
                style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: "#4CAF50",
                }}
                onClick={() => {
                    removeCartItemHandler();
                }}
            >
                <Trans t={t}>Bỏ ra khỏi giỏ hàng</Trans>
            </button>
        </div>
    );
}

export default DeleteFromCartButton;
