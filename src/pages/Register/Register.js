import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import { userServices } from '../../services/user.services';

const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  })
  console.log('errors',errors);

  // const navigate = useNavi

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className=" bg-indigo-100 lg:bg-white flex justify-center  lg:justify-start lg:px-12">
        <NavLink to='/home' className="cursor-pointer flex items-center">
          <div>
            <img className="w-14 rounded-full" src='https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg' alt='logo login'/>
          </div>
          <div className="text-2xl text-red-600 tracking-wide ml-2 font-semibold">
            CINEMA
          </div>
        </NavLink>
        
      </div>
      
      <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold">Đăng ký</h2>
      <form className='mt-10' onSubmit={handleSubmit(async (value)=>{
        try {
          const result = await userServices.dangKy(value)
          if (result.data.statusCode !== 400){
            alert('Đăng ký tài khoản thành công')
            history.push('/login')
          }
        } catch (error) {
          
        }
      })}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tài khoản
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập vào tài khoản"
              // thuộc tính 'taiKhoan' trùng name với thuộc tính của Backend đặt 
              {...register('taiKhoan', { /* Tham số thứ 2 là 1 object để validate */
                  required: 'Vui lòng nhập tài khoản',
                  maxLength: {
                    value: 10,
                    message: 'Tài khoản tối đa 10 kí tự'
                  },
                  minLength: {
                    value: 5,
                    message: 'Tài khoản tối thiểu 5 kí tự'
                  }
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.taiKhoan?.message}</p>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập vào mật khẩu"
              {...register('matKhau',{
                required: 'Vui lòng nhập mật khẩu',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                  message: 'Mật khẩu chứa tối thiểu 1 Kí tự in hoa, 1 kí tự thường, 1 kí tự đặc biệt và 1 số'
                }
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.matKhau?.message}</p>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập vào email"
              {...register('email',{
                required: 'Vui lòng nhập email',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email chưa đúng định dạng (example@gmail.com)'
                }
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.email?.message}</p>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số điện thoại
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"

              {...register('soDt',{
                required: 'Vui lòng nhập số điện thoại',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Vui lòng chỉ nhập số'
                },
                minLength: {
                  value: 7,
                  message: 'Số điện thoại tối thiểu 7 số'
                }
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.soDt?.message}</p>
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mã nhóm
            </label>
            <input

              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập vào mã nhóm"
              {...register('maNhom',{
                required: 'Vui lòng nhập mã nhóm',
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.maNhom?.message}</p>
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Họ tên
            </label>
            <input
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập vào họ tên"
              {...register('hoTen',{
                required: 'Vui lòng nhập họ tên',
              })}
            />
            <p className='mt-1 text-[14px] text-red-500'>{errors?.hoTen?.message}</p>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register