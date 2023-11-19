import React from 'react';
import { Link } from "react-router-dom";
import attendance from '../assets/att.png';
import leave from '../assets/leave.png';
import timesheet from '../assets/timesheet.png';
import organ from '../assets/organ.png';
// import perfor from '../assets/perfor.png';
import expen from '../assets/expen.png';
// import expen2 from '../assets/expen2.png';
import travel from '../assets/travel.png';
import dashboard from '../assets/dashboard.png';
import idCard from '../assets/idCard.png';

function Services() {
    return (
        <div className='mainService'>
            <h1 style={{ fontSize: "x-large", fontWeight: "700", textAlign: "center", marginTop: "3%" }}>Services</h1>
            <div className='serviceDiv' >
                <div className='services'>
                    <Link to={'/attendance/attend'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={attendance} alt="calendar-emoji" />
                            <h4> Attendance </h4>
                        </div>
                    </Link>
                    <Link to={'/leave'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={leave} alt="calendar-emoji" />
                            <h4> Leave </h4>
                        </div>
                    </Link>
                    <Link to={'/timesheet'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={timesheet} alt="calendar-emoji" />
                            <h4> Timesheet </h4>
                        </div>
                    </Link>
                    <Link to={'/organization'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={organ} alt="calendar-emoji" />
                            <h4> Organization </h4>
                        </div>
                    </Link>
                </div>
                <div className='services'>
                    <Link to={'/myprofile'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={idCard} alt="calendar-emoji" />
                            <h4> Virtual ID Card </h4>
                        </div>
                    </Link>
                    <Link to={'/expenditure'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={expen} alt="calendar-emoji" />
                            <h4> Expenditure </h4>
                        </div>
                    </Link>
                    <Link to={'/travel'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={travel} alt="calendar-emoji" />
                            <h4> Travel </h4>
                        </div>
                    </Link>
                    <Link to={'/dashboard'} className='specsDiv' style={{textDecoration : "none"}}>
                        <div>
                            <img width="100px" height="100px" src={dashboard} alt="calendar-emoji" />
                            <h4> Dashboard </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services
