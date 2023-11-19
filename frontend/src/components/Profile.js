import React, { useEffect, useState } from 'react'
import axios from "axios";

function Profile() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='profile'>
            {/* <p>{users}</p> */}
            <table className='profTable'>
                <tr>
                    <th colSpan={2}>Personal Information</th>
                </tr>
                <tr>
                    <td>Employee ID</td>
                    <td>User.Id</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>User.dept</td>
                </tr>
                <tr>
                    <td>Full Name</td>
                    <td>{"User.name"}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>User.dob</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>User.gen</td>
                </tr>
                <tr>
                    <td>Aadhar Number</td>
                    <td>User.aadhar</td>
                </tr>
                <tr>
                    <td>PAN Number</td>
                    <td>User.pan</td>
                </tr>
                <tr>
                    <th colSpan={2}>Contact Information</th>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>User.mob</td>
                </tr>
                <tr>
                    <td>Email Id</td>
                    <td>User.mail</td>
                </tr>
                <tr>
                    <th colSpan={2}>Address</th>
                </tr>
                <tr>
                    <td>Current Address</td>
                    <td>User.curAdd</td>
                </tr>
                <tr>
                    <td>Permanent Address</td>
                    <td>User.presAdd</td>
                </tr>
                <tr>
                    <th colSpan={2}>Office Information</th>
                </tr>
                <tr>
                    <td>Cabin Number</td>
                    <td>User.cabNum</td>
                </tr>
                <tr>
                    <td>Manager Name</td>
                    <td>User.manager</td>
                </tr>
            </table>
        </div>
    )
}

export default Profile
