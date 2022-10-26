import React from 'react'
import Menu from '../menu/Menu'
import Rightbar from '../rightbar/Rightbar';
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar';
import "./Home.css";

const Home = () => {

    return (
        <>
            <Topbar />
            <div className='home'>
                <Sidebar />
                <Menu />
                <Rightbar />
            </div>
        </>
    )
}

export default Home