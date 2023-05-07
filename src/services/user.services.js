import http from "../constant/api";

export const userServices = {
  dangNhap: (thongTinDangNhap) => {
    return http.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  },

  layThongTinNguoiDung: () => {
    return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
  }

};
