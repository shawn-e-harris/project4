import React from 'react'
import { Link } from "react-router-dom"

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
                        <br />
                        <Link style={userStyles} to="/">Home</Link>
                        &nbsp; &nbsp;
            <Link style={userStyles} to="/user" className="users">Users</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
