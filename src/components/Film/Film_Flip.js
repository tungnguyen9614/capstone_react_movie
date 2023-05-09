import React from "react";
import "./Film_Flip.css";
import {history} from '../../App'

const Film_Flip = (props) => {
  const { phim } = props;

  return (
    <div className="flip-card my-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={phim.hinhAnh}
            alt={phim.hinhAnh}
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="w-full h-full " style={{position:'absolute', backgroundColor:'rgba(0,0,0,.5)',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>              
                <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" id="playcirclefilledwhite"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zM10 7.5l6 4.5-6 4.5v-9z" opacity=".3" fill="#34a853" className="color000000 svgShape"></path><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-2 3.5v9l6-4.5z" fill="#34a853" className="color000000 svgShape"></path></svg>
                </div>
                <div className="text-2xl mt-2 font-bold">{phim.tenPhim}</div>

          </div>
          
        </div>
      </div>
    <div>

      <div onClick={()=>{
        history.push(`/detail/${phim.maPhim}`)
      }} className=" bg-black  text-center cursor-pointer py-2 my-2 text-white font-bold">ĐẶT VÉ</div>
    </div>
    </div>
  );
};

export default Film_Flip;
