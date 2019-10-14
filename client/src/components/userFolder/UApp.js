import React from "react"
import Axios from "axios"
import UForm from "./UForm"
import Navbar from "../CSS/navbar"
import { userList } from "../importsFolder/functions"
import 'bulma/css/bulma.css'
import Sticky from "../CSS/sticky"

const usersDiv = {
    fontSize: "35px",
    textAlign: "center",
    fontWeight: "900",
    color: "black"
}

export default class UApp extends React.Component {

    state = {
        currentUser: 1,
        users: []
    }

    // functon knows about state b/c it lives here
    getUsersFromServer = () => {
        Axios.get("/api/user/") //get prefix
            .then(res => {
                this.setState({ users: res.data })
            })// //create promise
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.getUsersFromServer()
    }

    getAllUsers = () =>
        // eliminates need for {userList(testUsers)}
        Object.values(this.state.users)

    render = () => (
        <div>
            <Navbar/>
            <br/>
                <UForm
                    getUsersFromServer={this.getUsersFromServer}
                />
                <h1 style={usersDiv}>Users</h1>
                <div className="userPreview">

                    {userList(this.getAllUsers())}
                </div>
            <Sticky/>
        </div>
    )
}

// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE