// import React from "react";
// import { Radio, Space, Tabs } from "antd";
// import { useState } from "react";

// const HomeMenu = (props) => {
//   const [tabPosition, setTabPosition] = useState("left");
//   const changeTabPosition = (e) => {
//     setTabPosition(e.target.value);
//   };

//   const {heThongRapChieu} = props

//   const renderHeThongRap = () => {
//     return heThongRapChieu?.map((heThongRap, index)=>{
      
//       return {
//           label: <img src={heThongRap.logo} className="rounded-full" width='50'/> ,
//           key: `${heThongRap.maHeThongRap}`,
//           children: `${<Tabs tabPosition={tabPosition} items={heThongRap.tenHeThongRap}/>}`
//       }
//     })
//   }

//   return (
//     <div>
    
//       {/* <Tabs
//         tabPosition={tabPosition}
//         items={new Array(3).fill(null).map((_, i) => {
//           const id = String(i + 1);
//           return {
//             label: <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" className="rounded-full" width={50}/> ,
//             key: id,
//             children: `Content of Tab ${id}`,
//           };
//         })}
//       /> */}
//       <Tabs
//         tabPosition={tabPosition}
//         items={renderHeThongRap()}
//       />
//     </div>
//   );
// };

// export default HomeMenu;

import React, { Fragment } from 'react';
import {Tabs, Radio, Space} from 'antd'
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const {TabPane} = Tabs

export default class Demo extends React.Component {
  state = {
    tabPosition: 'left',
  }

  changeTabPosition = (e) => {
    this.setState({tabPosition: e.target.value})
  }

  renderHeThongRap = () => {
    let {tabPosition} = this.state;
    return this.props.heThongRapChieu?.map((heThongRap)=>{
      return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width='60'/>} key={heThongRap.maHeThongRap}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap.lstCumRap?.slice(0,6).map((cumRap, index)=>{
            return <TabPane tab={
              <div style={{width:'300px',display:'flex',alignItems:"center"}}>
                <img className='w-24' src='https://cdn.brvn.vn/news/480px/2017/13811_Rapchieuphim.jpg' />
                <div className='text-left ml-2 '>
                  <p className='text-base font-bold mb-0'>{cumRap.tenCumRap}</p>
                  {cumRap.diaChi.length > 30 ? <p className='mb-0'>{cumRap.diaChi.slice(0,30)} ...</p> : <p className='mb-0'>{cumRap.diaChi}</p>}
                  {/* {phim.moTa.length > 100 ? <span>{phim.moTa.slice(0,120)} ...</span> : <span>{phim.moTa}</span>} */}
                  <p className='text-red-500'>[Chi tiết]</p>
                </div>
              </div>
            } 
              key={index}>
               {/* Load phim tương ứng */}
               {cumRap.danhSachPhim.slice(0,5).map((phim)=> {
                return <Fragment key={phim.maPhim}>
                  <div className='my-5'  style={{display:'flex'}}>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <img style={{width:100, height:120}} src={phim.hinhAnh} alt={phim.tenPhim}
                     onError={e=>{
                      e.target.onerror = null; e.target.src = "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"
                    }}
                    />
                    <div className='ml-2 '>
                      <h1 className='text-2xl text-black font-bold'>{phim.tenPhim}</h1>
                      <p className='text-base'>{cumRap.diaChi}</p>
                      <div className='grid grid-cols-6 gap-5'>
                        {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu, index)=>{
                          return <NavLink className='p-1 border-2 text-green-600 text-xl font-bold' to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                          </NavLink>
                        })}
                      </div>
                    </div>

                  </div>

                </div>
                <hr/>
                </Fragment>
               })}

              </TabPane>
          })}
        </Tabs>
      </TabPane>
    })
  }

  render() {
    const {tabPosition} = this.state;
    return (
      <div>
        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}
        </Tabs>
      </div>
    )
  }
}
