import { message } from "antd";
import { history } from "../../App";
import { userServices } from "../../services/user.services";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await userServices.dangNhap(thongTinDangNhap)
            
            if(result?.data?.statusCode ===200){
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
                //Chuyển hướng về trang trước đó
                history.push('/home')
            }
        } catch (error) {
            console.log('error',error.response.data);
        }
    }
}

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await userServices.layThongTinNguoiDung()
            
            if(result?.data?.statusCode ===200){
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }

            console.log('result', result);
        } catch (error) {
            console.log('error',error.response.data);
        }
    }
}