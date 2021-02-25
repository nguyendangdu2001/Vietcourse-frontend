import { AnimatePresence } from "framer-motion";
import React, { createContext, lazy, Suspense, useContext, useReducer } from "react";
import { useSelector } from "react-redux";
const LoginPopup = lazy(() => import("./LoginPopup"));

export const PopupContext = createContext(false);
const popupReducer = (state, action) => {
    switch (action.type) {
        case "OPEN":
            return { show: true, option: { ...state.option, ...action.payload.option } };
        case "CLOSE":
            return { ...state, show: false };
        case "CHANGE_OPTION":
            return { ...state, option: { ...state.option, ...action.payload.option } };
        default:
            return state;
    }
};
export const LoginPopupProvider = ({ children, ...rest }) => {
    const [popupState, dispatch] = useReducer(popupReducer, {
        show: false,
        option: { activePanel: "left" },
    });
    const auth = useSelector(({ userStatus }) => userStatus.auth);

    const changePopupState = ({ show = true, option = { activePanel: "left" } }) => {
        if (!show) return dispatch({ type: "CLOSE" });
        dispatch({ type: "OPEN", payload: { option } });
    };

    return (
        <PopupContext.Provider value={{ popupState, changePopupState }} {...rest}>
            {children}
            <Suspense fallback={null}>
                <AnimatePresence>
                    {!auth && popupState.show && <LoginPopup {...popupState} />}{" "}
                </AnimatePresence>
            </Suspense>
        </PopupContext.Provider>
    );
};

export const useLoginPopup = () => {
    const context = useContext(PopupContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a UserProvider");
    }

    return context;
};
