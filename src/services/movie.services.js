import http from "../constant/api"

export const movieServices = {
    //Lay danh sach banner
    getMovieBanner: () => {
        return http.get(`api/QuanLyPhim/LayDanhSachBanner`)
    },

    getMovieList: (query = '') => {
        return http.get(`api/QuanLyPhim/LayDanhSachPhim${query}`)
    }
}