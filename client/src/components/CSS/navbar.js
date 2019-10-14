import React from 'react'
import {Link} from "react-router-dom"

const userStyles = {
    textAlign: "left",
    color: "black",
    marginLeft: "25px",
    fontWeight: "400",
    fontSize: "20px"
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
            <ul class="home">
                <br/>
                <Link style={userStyles} to="/">Home</Link>
                &nbsp; &nbsp; 
            {/* </ul>
            <ul class="about"> */}
            <Link style={userStyles} to="/user" className="users">Users</Link>
            </ul>
            {/* <ul class="starring">
                <a href="/pages/starring.html">Starring</a>
                <a href="#"><li>Huey Freeman</li></a>
                <a href="#"><li>Riley Freeman</li></a>
                <a href="#"><li>Robert "Grandad" Freeman</li></a>
                <a href="#"><li>Uncle Ruckus</li></a>
            </ul>
            <ul class="recentNews">
                Recent News
            </ul> */}
        </nav>
            </div>
        )
    }
}
