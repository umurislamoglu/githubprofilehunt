import React from "react";
import EmployerSignUp from "../pages/Auth/EmployerSignUp";
import SeekerSignUp from "../pages/Auth/SeekerSignUp";
import Login from "../pages/Auth/Login";
import { Route } from "react-router-dom";
import AdvertList from './../pages/Seeker/AdvertList';
import ProfilePage from './../pages/ProfilePage';



export default function Dashboard() {
  return (
    <div>
        
        <Route exact path ="/EmployerSignUp" component={EmployerSignUp}/>
        <Route exact path ="/SeekerSignUp" component={SeekerSignUp}/>
        <Route exact path ="/Login" component={Login}/>
        <Route exact path ="/AdvertList" component={AdvertList}/>
        <Route exact path ="/ProfilePage" component={ProfilePage}/>
    </div>
  );
}
