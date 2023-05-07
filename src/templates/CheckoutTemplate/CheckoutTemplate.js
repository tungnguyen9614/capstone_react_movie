import { Fragment } from "react";
import { Redirect,Route } from "react-router-dom";
import { user } from "../../util/settings/config";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import Header from "../HomeTemplate/Layout/Header/Header";

const CheckoutTemplate = (props) => { //path, exact, Component
  const { Component, ...restProps } = props;

  if(!localStorage.getItem(user)){
    return <Redirect to='/login'/>
  }

  return <Route {...restProps} render={(propsRoute)=>{ //props.location, props.history, props.match
    return <Fragment>
        <Header {...propsRoute}/>
        <Component {...propsRoute}/>
        <Footer/>
    </Fragment>
  }} />
};

export default CheckoutTemplate
