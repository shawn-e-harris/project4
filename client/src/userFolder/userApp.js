import React from "react"
import Axios from "axios"
import NewUserForm from "./NewUserForm"
import { userList } from "../importsFolder/functions"

export default class UserApp extends React.Component {

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
        <div className='container'>
            <NewUserForm
                getUsersFromServer={this.getUsersFromServer}
            />
            <h1>Users</h1>
            {userList(this.getAllUsers())}
        </div>
    )
}
// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE