import http from "../constant/api"
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe"

export const ticketBookingServices = {
    //Lay danh sach banner
    layChiTietPhongVe: (maLichChieu) => {
        return http.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    },

    datVe : (thongTinDatVe = new ThongTinDatVe()) => {
        return http.post(`api/QuanLyDatVe/DatVe`,thongTinDatVe)
    }

  
}