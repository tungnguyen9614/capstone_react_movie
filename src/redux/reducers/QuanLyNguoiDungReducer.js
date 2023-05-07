import { accessToken, user } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType"

let user_login = {};
if(localStorage.getItem(user)){
    user_login = JSON.parse(localStorage.getItem(user))
}

const stateDefault = {
    userLogin: user_login,
    thongTinNguoiDung: {}
}

export const QuanLyNguoiDungReducer = (state=stateDefault, action) => {
    switch (action.type) {

        case DANG_NHAP_ACTION: {
            const {thongTinDangNhap} = action;
            localStorage.setItem(user,JSON.stringify(thongTinDangNhap))
            localStorage.setItem(accessToken,thongTinDangNhap.accessToken)

            return {...state, userLogin: thongTinDangNhap}
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung
            return {...state}
        }

        default:
            return {...state}
    }
}