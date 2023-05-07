import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

const Home = (props) => {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={phim.maPhim}/>;
  //   });
  // };
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction())
  }, []);

  return (
    <div className="container mx-auto">
      <HomeCarousel/>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />

          {/* <div className="flex flex-wrap -m-4">
            {renderFilms()}
          </div> */}
        </div>
      </section>

      <HomeMenu heThongRapChieu={heThongRapChieu}/>
    </div>
  );
};

export default Home;
