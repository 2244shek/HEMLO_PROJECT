import React from 'react'
import { Link } from 'react-router-dom'

function NavigationTimesheet() {
    return (
        <div>
            <nav className="  navbar navbar-light " style={{ backgroundColor: "#C6C5B9" }}>
                <div className="container-fluid align-items-center ">
                    <Link className="navbar-brand ms-2  " to="/timesheet">
                        <h3 style={{marginBottom : "0px"}}>Timesheet</h3>
                    </Link>
                    <span className="add-task navbar-brand mb-0 h2 "><Link className="nav-link  " to={"/timesheet/events/add"}>Add Task</Link></span>
                </div>

            </nav>
        </div>
    )
}

export default NavigationTimesheet
