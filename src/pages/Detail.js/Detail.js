import React, { useEffect } from "react";
import "./Detail.css";
import "../../assets/styles/circle.css";
import {Tabs, Radio, Space} from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';


const {TabPane} = Tabs

const Detail = (props) => {
    const {filmDetail} = useSelector(state => state.QuanLyPhimReducer)

    console.log({filmDetail});

    const dispatch = useDispatch()

    useEffect(()=>{
        //Lấy thông tin param từ url
        let {id} = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
    }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="upper-layer">
        <div className="mt-5 grid grid-cols-12">
          <div className="col-span-4 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                width={'90%'}
                src={filmDetail.hinhAnh}
                alt="123"
              />
              <div className="col-span-2" >
                <p className="text-xl text-yellow-400">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                <p className="text-4xl text-white">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
                <button className="text-white bg-green-500 p-3 rounded-lg">MUA VÉ NGAY</button>
              </div>
            </div>
            
          </div>

          <div className="col-span-4 col-start-8 flex flex-col"> 
              <div>
                <h1 style={{marginLeft:'11%',color:'yellow',fontWeight:'bold', fontSize:'15px'}}>Đánh giá</h1>
                <h1 style={{marginLeft:'5%'}} ><Rate allowHalf defaultValue={(filmDetail.danhGia)/2} /></h1>
              </div>
                 
              <div className={`c100 p${filmDetail.danhGia*10} big`}>
                <span>{filmDetail.danhGia*10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>

            </div>
        </div>

        <div className="mt-20 container mx-auto bg-gray-800  px-3 py-5">
          <Tabs className="text-white" defaultActiveKey="1" centered style={{minHeight:300}}>
              <TabPane tab="Lịch chiếu" key='1'>
                <div className="mt-10 container mx-auto">
                  <Tabs tabPosition={'left'} className= "p-3">
                      {filmDetail.heThongRapChieu?.map((htr)=> {
                          return <TabPane 
                              tab={
                                  <div className="flex flex-row items-center justify-center text-white">
                                      <img width={50} height={50} src={htr.logo} alt={htr.tenHeThongRap}/>
                                      <div className="text-center ml-2">
                                      {htr.tenHeThongRap}
                                      </div>
                                  </div>
                              } 
                              key={htr.maHeThongRap}>
                                {htr.cumRapChieu?.map((cumRap, index)=>{
                                  return <div className="mb-5" key={index}>
                                    <div className="flex flex-row">
                                      <img className="w-24" src="https://cdn.brvn.vn/news/480px/2017/13811_Rapchieuphim.jpg"/>
                                      <div className="ml-3 text-white">
                                        <p className="text-xl font-bold">{cumRap.tenCumRap}</p>
                                        <p>{cumRap.diaChi}<span className="ml-3 text-red-600">[Bản đồ]</span></p>
                                      </div>
                                    </div>

                                    <div className="thong-tin-lich-chieu grid grid-cols-4">
                                      {cumRap.lichChieuPhim?.map((lichChieu)=>{
                                        return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu} className="mt-4 col-span-1 text-xl text-green-600 font-bold ">
                                          <span className="p-1 border border-green-300 rounded-sm">

                                          {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                          </span>
                                        </NavLink>
                                      })}

                                    </div>
                                  </div>
                                })}
                          </TabPane>
                      })}
                  </Tabs>
                </div>
              </TabPane>
              <TabPane tab="Thông tin" key='2'>
                 <div className="grid grid-cols-6">
                      <div className="col-start-2 col-span-2">
                        <div className="grid grid-cols-3">
                        <div className="col-span-1 text-xl">
                          <p>Đạo diễn</p>
                          <p>Diễn viên</p>
                          <p>Thể loại</p>
                          <p>Định dạng</p>
                        </div>
                        <div className="col-span-2 text-xl">
                          <p>Michael Bay</p>
                          <p>Tom Cruise</p>
                          <p>Action, Mystery, Thriller</p>
                          <p>2D/Digitals</p>
                        </div>
                        </div>
                      </div>
                      <div className="ml-10 col-start-4 col-span-2">
                        <p className="text-xl">Nội dung</p>
                        <p className="text-base">{filmDetail.moTa}</p>
                      </div>
                 </div>
              </TabPane>

          </Tabs>
        </div>

        
      </div>
      
    
    </div>
  );
};

export default Detail;
