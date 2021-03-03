import React from 'react';
import './dashbord.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import { HiHome } from 'react-icons/hi';
import { FcMindMap } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";

const navItems = [
    {
        icon: <HiHome />,
        name: "Dashbord",
        link: "/"

    },
    {
        icon: <BsFillPeopleFill />,
        name: "Recruitment",
        link: "/recruitment"

    },
    {
        icon: <BiSpreadsheet />,
        name: "Onboarding",
        link: "/onboarding"

    },
    {
        icon: <HiOutlineDocumentReport />,
        name: "Reports",
        link: "/reports"

    }, {
        icon: <BsCalendar />,
        name: "Calender",
        link: "/calender"

    },
    {
        icon: <GrSettingsOption />,
        name: "Settings",
        link: "/settings"

    }

];


const Dashbord = ({ children }) => {
    const location = useLocation(children);
    return (
        <div className="dashbord-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <FcMindMap />
                    <span className="logo">Newtonschool HR</span>
                </div>
                <div className="nav-container">
                    {navItems.map((navItem, index) => (
                        <Link to={navItem.link}>
                            <div key={index} className={`nav-item ${navItem.link === location.pathname ? 'select' : ''} `}>
                                {navItem.icon}
                                <label className="navItem-name">{navItem.name}</label>
                            </div>
                        </Link>

                    ))}
                </div>
                <div className="side-bar-image">

                </div>
            </nav>

            <div className="main-container">
                {children}
            </div>
        </div >

    )
}
export default Dashbord;