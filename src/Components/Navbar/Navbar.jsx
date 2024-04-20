import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/images/menu.png";
import logo from "../../assets/images/logo.png";
import search_icon  from '../../assets/images/search.png'
import upload_icon from '../../assets/images/upload.png'
import more_icon from '../../assets/images/more.png'
import save_icon from '../../assets/images/save.png'
import noti_icon from '../../assets/images/notification.png'
import profile_icon from '../../assets/images/jack.png'

const Navbar = ({setSidebar}) => {
    return (
        <div>
            <nav className="flex-div">
                <div className="nav-left flex-div">
                    <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt='" '></img>
                    <img className="logo" src={logo} alt=""></img>
                </div>

                <div className="nav-middle flex-div">
                    <div className="search-box">
                    <input type="text" placeholder="Search" ></input>
                    <img src={search_icon} alt=""></img>
                    </div>
                </div>

                <div className="nav-right flex-div">
                    <img src={upload_icon} alt=""></img>
                    <img src={more_icon} alt=""></img>
                    <img src={noti_icon} alt=""></img>
                    <img className="user-icon" src={profile_icon} alt=""></img>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
