import { movieServices } from "../../services/movie.services";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieServices.getMovieBanner();

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
