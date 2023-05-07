import { rapServices } from "../../services/rap.services";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await rapServices.layDanhSachHeThongRap("?maNhom=GP01");
      if(result.status === 200) {
        dispatch({
            type: SET_HE_THONG_RAP_CHIEU,
            payload: result.data.content
        })
      }
    } catch (error) {
      console.log('error' ,error.response?.data);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try{
      const result = await rapServices.layThongTinLichChieuPhim(id)

      dispatch({
        type: SET_CHI_TIET_PHIM,
        payload: result.data.content
      })
    } catch (error) {
      console.log('error' ,error.response?.data);
    }
  }
}
