import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => { //path, exact, Component
  const { Component, ...restProps } = props;

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return <Route {...restProps} render={(propsRoute)=>{ //props.location, props.history, props.match
    return <Fragment>
        <Header {...propsRoute}/>
        
        
        <Component {...propsRoute} />
        
        <Footer/>
    </Fragment>
  }} />
};
