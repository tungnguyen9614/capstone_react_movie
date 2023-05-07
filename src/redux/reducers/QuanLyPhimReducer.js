import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 5634,
      tenPhim: "Timmy Failure",
      biDanh: "timmy-failure",
      trailer: "https://www.youtube.com/embed/4loOtFz--J0",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/timmy-failure_gp07.jpg",
      moTa: "Timmy Failure, who, along with his 1,500-pound polar bear partner Total, operates Total Failure Inc., a Portland detective agency. An elementary school oddball, the clueless but confident Timmy (Winslow Fegley) must navigate the world of adults around him, including his overburdened mother (Ophelia Lovibond).",
      maNhom: "GP07",
      ngayKhoiChieu: "2021-09-22T13:36:57.5",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
        "maPhim": 11352,
        "tenPhim": "SHAZAM! Cơn Thịnh Nộ Của Các Vị Thần",
        "biDanh": "shazam-con-thinh-no-cua-cac-vi-than",
        "trailer": "https://www.youtube.com/embed/VPdzrS5xlWA",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shazam-con-thinh-no-cua-cac-vi-than_gp07.jpg",
        "moTa": "Diễn Viên: Zachary Levi, Asher Angel, Jack Dylan Grazer, Adam Brody, Ross Butler, Meagan Good, D.J. Cotrona, Grace Caroline Currey, Faithe Herman, Ian Chen, Jovan Armand, Marta Milans, Cooper Andrews, Djimon Hounsou",
        "maNhom": "GP07",
        "ngayKhoiChieu": "2022-12-24T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
      },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {}
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM : {
        state.arrFilm = action.arrFilm
        state.arrFilmDefault = state.arrFilm
        return {...state}
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu
      state.arrFilm = state.arrFilmDefault.filter(film=> film.dangChieu === state.dangChieu);
      return {...state}
    }

    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu
      state.arrFilm = state.arrFilmDefault.filter(film=> film.sapChieu === state.sapChieu);
      return {...state}
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.payload;
      return {...state}
    }

    default:
      return { ...state };
      break;
  }
};
