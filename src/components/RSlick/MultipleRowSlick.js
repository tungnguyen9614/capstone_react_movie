import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderFilms = () => {
    return props.arrFilm.slice(0, 12).map((phim, index) => {
      //className={`${styleSlick['width-item']}`}
      return (
        <div className="mt-3" key={phim.maPhim}>
          {/* <Film phim={phim}/> */}
          <Film_Flip phim={phim} />
        </div>
      );
    });
  };

  let activeClassDC = dangChieu === true ? "active-Film" : "none-active-Film";
  let activeClassSC = sapChieu === true ? "active-Film" : "none-active-Film";

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded-full bg-gray-800 text-white mr-5`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded-full bg-gray-200 text-gray-800`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
