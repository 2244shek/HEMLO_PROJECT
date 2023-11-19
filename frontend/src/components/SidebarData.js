import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BadgeIcon from '@mui/icons-material/Badge';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';


export const SidebarData = [
    {
        id : 0 ,
        title : "Home",
        icon: <HomeIcon />,
        link :   "/home"
    },
    {
        id : 1 ,
        title : "Services",
        icon: <HomeRepairServiceIcon />,
        link :   "/services"
    },
    {
        id : 2 ,
        title : "Leave",
        icon: <EventBusyIcon />,
        link :   "/leave"
    },
    {
        id : 3 ,
        title : "Attendance",
        icon: <CalendarMonthIcon />,
        link:   "/attendance/attend"
    },
    {
        id : 4 ,
        title : "Dashboard",
        icon: <AssessmentIcon />,
        link :   "/dashboard"
    },
    {
        id : 5 ,
        title : "My Profile",
        icon: <BadgeIcon />,
        link :   "/myprofile"
    }
    // {
    //     id : 6 ,
    //     title : "Register New Employee",
    //     icon: <PersonAddIcon />,
    //     link :   "/register"
    // },

]