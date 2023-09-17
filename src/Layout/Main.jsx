import React from 'react';
import Navmenu from '../Component/Navber/Navmenu';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/sheard/Footer';

const Main = () => {
    return (
        <div>
           <Navmenu></Navmenu>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;