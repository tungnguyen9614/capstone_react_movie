import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import _ from "lodash";
import { user, accessToken } from "../../../../util/settings/config";

const Header = (props) => {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-3 rounded"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Đăng ký
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <button
          //   onClick={()=>{
          //       history.push('/profile')
          // }}
          className="self-center px-8 py-3 rounded"
        >
          Xin chào, {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(user);
            localStorage.removeItem(accessToken);
            history.push("/home");
            window.location.reload();
          }}
          className="text-white p-2 border border-white font-bold "
        >
          Đăng xuất
        </button>
      </Fragment>
    );
  };

  return (
    <header className="p-2 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto pl-2 pr-2">
        <NavLink
          to="/"
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div>
            <img
              className="w-14 rounded-full"
              src="https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg"
              alt="logo login"
            />
          </div>
          <div className="text-2xl text-red-600 tracking-wide ml-2 font-semibold">
            CINEMA
          </div>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white"
              activeClassName="border-b-2"
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="border-b-2"
            >
              Liên hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="border-b-2"
            >
              Tin tức
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
