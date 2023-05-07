import React from "react";

const Film = (props) => {
  const { phim } = props;

  return (
    <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
      <div style={{background:`url(${phim.hinhAnh})`,backgroundRepeat:'no-repeat' ,backgroundPosition:'center',backgroundSize:"cover"}}>
        <img src={phim.hinhAnh} alt={phim.hinhAnh} className="opacity-1 w-full" style={{height:"500px"}}/>
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-14 py-4">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3">
        {phim.moTa.length > 100 ? <span>{phim.moTa.slice(0,120)} ...</span> : <span>{phim.moTa}</span>}
      </p>
      <a className="text-indigo-500 inline-flex items-center">
        ĐẶT VÉ
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
     
    </div>
  );
};

export default Film;
