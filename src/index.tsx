import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import firebase from "./config/Firebase/fbConfig";
// import { createFirestoreInstance } from "redux-firestore";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import * as serviceWorker from "./serviceWorker";
import store from "./Redux/Store/store";
import { LoginPopupProvider } from "./common/components/AuthPopup/LoginPopupProvider";

// const rrfProps = {
//   firebase,
//   config: { userProfile: "user" },
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// };

ReactDOM.render(
  <Provider store={store}>
    <LoginPopupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginPopupProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
