import { ticketBookingServices } from "../../services/ticketBooking.services";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await ticketBookingServices.layChiTietPhongVe(maLichChieu)
            
            if(result.status === 200){
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        } catch (error) {
            console.log('error',error.response?.data);
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {
            const result = await ticketBookingServices.datVe(thongTinDatVe)
            console.log(result.data.content);
        } catch (error) {
            console.log('error',error.response.data);
        }
    }
}