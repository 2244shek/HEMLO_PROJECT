import React from "react";
import "./App.css";
import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import Leave from "./components/Leave";
import Services from "./components/Services";
// import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import RegistrationForm from "./components/RegistrationForm";

import AddEvents from "./components/AddEvents";
import UpdateEvent from "./components/UpdateEvent";
import MyCalendar from "./components/MyCalendar";

import CheckById from "./components/CheckById";
import CheckByDate from "./components/CheckByDate";
import AttendanceForm from "./components/AttendanceForm";

// import "./style/global.scss" ;
// import NavigationTimesheet from "./components/NavigationTimesheet";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <div className='App'>
        <Router>

          <Routes>

          <Route path='/' element={ <LoginForm/>}/>
          <Route path='/register' element={ <RegistrationForm/>}/>
          <Route path='/home' element={<><Sidebar /> <Home /></>}/>
          <Route path='/leave' element={<><Sidebar /> <Leave /></>}/>
          <Route path='/services' element={<><Sidebar /> <Services/></>}/>
          <Route path='/myprofile' element={<><Sidebar /> <Profile/></>}/>

          <Route path="/timesheet" exact element={<><Sidebar /><MyCalendar /></>} />
          <Route path="/timesheet/events/add" element={<><Sidebar /><AddEvents /></>} />
          <Route path="/timesheet/event/:id/update" element={<><Sidebar /><UpdateEvent /></>} />

          <Route path="/attendance/id" element={<><Sidebar /><CheckById /></>} />
          <Route path="/attendance/date" element={<CheckByDate />} />
          <Route path="/attendance/attend" element={<><Sidebar/><AttendanceForm /></>} />
          </Routes>

        </Router>
      </div>
  );
}

export default App;
