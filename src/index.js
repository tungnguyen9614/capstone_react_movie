import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Antd
import 'antd/dist/reset.css';
//React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastMessage } from "./module/ToastMessage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastMessage/>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
