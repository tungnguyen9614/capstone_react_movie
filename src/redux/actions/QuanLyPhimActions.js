import { movieServices } from "../../services/movie.services";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
          const result = await movieServices.getMovieList('?maNhom=GP07');
    
          dispatch({
            type: SET_DANH_SACH_PHIM,
            arrFilm: result.data.content,
          });
        } catch (error) {
          console.log(error);
        }
      };
}