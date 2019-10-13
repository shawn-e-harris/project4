import React from "react"
import Axios from "axios"
import UForm from "./UForm"
import { userList } from "../importsFolder/functions"
import 'bulma/css/bulma.css'

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
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li class="is-active"><a href="/user">Users</a></li>
                </ul>
            </nav>
            <div className='container'>
                <UForm
                    getUsersFromServer={this.getUsersFromServer}
                />
                <h1>Users</h1>
                <div className="userPreview">

                    {userList(this.getAllUsers())}
                </div>
            </div>
        </div>
    )
}

// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE