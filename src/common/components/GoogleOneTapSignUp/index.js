import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { googleKey } from "../../../config/authKey/googleKey";
import { authenticateUserHandler } from "../../../Redux/action/userAction";
export const GoogleOneTapSignUp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleCredentialResponse = (res) => {
            const { credential } = res;
            console.log(res);
            dispatch(authenticateUserHandler("/api/auth/google", { id_token: credential }));
        };
        window.onload = () => {
            window.google.accounts.id.initialize({
                client_id: googleKey.googleClientId,
                callback: handleCredentialResponse,
                cancel_on_tap_outside: false,
            });
            window.google.accounts.id.prompt();
        };

        return () => {
            //
        };
    }, [dispatch]);
    return null;
};
export default GoogleOneTapSignUp;
