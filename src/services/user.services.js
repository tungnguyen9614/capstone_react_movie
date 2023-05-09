import http from "../constant/api";

export const userServices = {
  dangNhap: (thongTinDangNhap) => {
    return http.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  },

  dangKy: (payload) => http.post(`api/QuanLyNguoiDung/DangKy`, payload),

  layThongTinNguoiDung: () => {
    return http.post("api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
};
