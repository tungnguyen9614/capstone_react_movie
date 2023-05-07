import http from "../constant/api";

export const rapServices = {
  layDanhSachHeThongRap: (query = "") => {
    return http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap${query}`);
  },
  layThongTinHeThongRap: () => {
    return http.get(`api/QuanLyRap/LayThongTinHeThongRap`)
  },
  layThongTinLichChieuPhim: (maPhim) => {
    return http.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }
};
