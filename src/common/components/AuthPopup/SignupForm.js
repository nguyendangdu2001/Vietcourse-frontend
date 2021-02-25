import React, { useState } from "react";
import { useDispatch } from "react-redux";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { TextField, makeStyles } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";
import { googleKey } from "../../../config/authKey/googleKey";
import { authenticateUserHandler, signup } from "../../../Redux/action/userAction";

export const SignupForm = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const dispatch = useDispatch();
    const { t } = useTranslation("translation", { useSuspense: false });
    const responseGoogle = (res) => {
        dispatch(authenticateUserHandler("/api/auth/google", { id_token: res.tokenId }));
    };
    const responseFacebook = (res) => {
        dispatch(authenticateUserHandler("/api/auth/facebook", { access_token: res.accessToken }));
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (password !== rePassword) {
        } else {
            dispatch(signup(name, userName, password));
        }
    };
    const useStyle = makeStyles((theme) => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
            },
        },
    }));
    const classes = useStyle();

    return (
        <form action="#" className={classes.root} onSubmit={(e) => onSubmitHandler(e)}>
            <h1>
                <Trans t={t}>Đăng ký</Trans>
            </h1>
            <div className="social-container">
                <GoogleLogin
                    clientId={googleKey.googleClientId}
                    render={(renderProps) => (
                        <span
                            className="social"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <i className="fab fa-google-plus-g"></i>
                        </span>
                    )}
                    buttonText=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
                <FacebookLogin
                    appId="300653421124122"
                    fields="name,email,picture"
                    render={(renderProps) => (
                        <span
                            className="social"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <i className="fab fa-facebook-f"></i>
                        </span>
                    )}
                    textButton=""
                    callback={responseFacebook}
                />
                <span href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                </span>
            </div>
            <span>
                <Trans t={t}>Hoặc dùng email để đăng ký tài khoản</Trans>
            </span>
            <TextField
                label={t("Tên")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />
            <TextField
                label={t("Tên đăng nhập")}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                value={userName}
                fullWidth
            />
            <TextField
                label={t("Mật khẩu")}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
                type="password"
                fullWidth
            />
            <TextField
                label={t("Nhập lại mật khẩu")}
                onChange={(e) => {
                    setRePassword(e.target.value);
                }}
                value={rePassword}
                type="password"
                fullWidth
            />
            <button>
                <Trans t={t}>Đăng ký</Trans>
            </button>
        </form>
    );
};
