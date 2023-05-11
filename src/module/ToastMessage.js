import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = () => {
const notify = () => toast("Wow so easy!");
  const toastClone = {
    error: (message) => toast(message, { type: 'error' }),
    success: (message) => toast(message, { type: 'success' }),
  }
  Object.assign(message, toastClone);

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
};

export const message = {};
