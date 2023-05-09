import { ticketBookingServices } from "../../services/ticketBooking.services";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";

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
            dispatch(displayLoadingAction)

            const result = await ticketBookingServices.datVe(thongTinDatVe)
            console.log(result.data.content);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})

            dispatch(hideLoadingAction)
        } catch (error) {
            console.log('error',error.response.data);
            dispatch(displayLoadingAction)
        }
    }
}