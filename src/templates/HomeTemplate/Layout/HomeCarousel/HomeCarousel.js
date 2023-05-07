import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { movieServices } from "../../../../services/movie.services";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";

const HomeCarousel = (props) => {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  // Sẽ tự kích hoạt khi component load ra
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await movieServices.getMovieBanner();
  //       console.log('result',result);

  //       dispatch({
  //         type: 'SET_CAROUSEL',
  //         arrImg: result.data.content
  //       })

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {

    //1 action = {type:'', data}
    //2 (Phải cài middleware): callBackFunction (dispatch)
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "800px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={item.maBanner}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              className="w-full opacity-0"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel effect="fade">{renderImg()}</Carousel>;
};

export default HomeCarousel;
