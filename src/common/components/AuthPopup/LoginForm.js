import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation, Trans } from "react-i18next";
import { googleKey } from "../../../config/authKey/googleKey";
import { authenticateUserHandler, signin } from "../../../Redux/action/userAction";

export const LoginForm = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { t } = useTranslation("translation", { useSuspense: false });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(userName, password));
    };

    const responseGoogle = (res) => {
        dispatch(authenticateUserHandler("/api/auth/google", { id_token: res.tokenId }));
    };
    const responseFacebook = (res) => {
        dispatch(authenticateUserHandler("/api/auth/facebook", { access_token: res.accessToken }));
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
        <form className={classes.root} onSubmit={(e) => submitHandler(e)}>
            <h1>
                <Trans t={t}>Đăng nhập</Trans>
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
                <Trans t={t}>Hoặc sử dụng tài khoản hiện tại</Trans>
            </span>
            <TextField
                label={t("Tên tài khoản")}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                value={userName}
                fullWidth
                size="small"
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
            <span>
                <Trans t={t}>Quên mật khẩu</Trans> ?
            </span>
            <button type="submit">
                <Trans t={t}>Đăng nhập</Trans>
            </button>
        </form>
    );
};
