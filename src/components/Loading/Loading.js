import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
    const {isLoading} = useSelector(state => state.LoadingReducer)

  return (
    <Fragment>
        { isLoading ? <div style={{position:'fixed', top:0, left: 0, width:'100%',height:'100%',zIndex:99, backgroundColor:'rgba(0,0,0,.5)',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='text-white text-4xl'>Loading...</div>
        </div> : "" }
    </Fragment>
    
  )
}
