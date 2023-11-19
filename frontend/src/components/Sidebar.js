import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import { Link } from "react-router-dom";
import logo from '../assets/logo_transparent.png';

function Sidebar() {

    return (
        <div className='Sidebar'>
            <div className='logoButt'>
                {/* <h3>Logo here</h3> */}
                <Link to="/">
                    <img src={logo} alt="logo_here" />
                </Link>
            </div>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <Link to={val.link} style={{ textDecoration: "none" }}>
                            <li key={key}
                                className='row'>
                                {" "}
                                <div id='icon'>{val.icon}</div>
                                {" "}
                                <div id='title'>{val.title}</div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <div className='userBar'>
                {/* <Link to="/">
                    <button >
                        Log In
                    </button>
                </Link> */}
                <div>
                    <Link to="/">
                        <button >
                            Log Out
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar