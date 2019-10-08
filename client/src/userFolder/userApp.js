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

    getCurrentUser = () =>
        // instead of calling {userList(this.state.user[this.state.currentUser]) this helps to reduce redundancy
        this.state.users[this.state.currentUser]


    getAllUsers = () =>
        // eliminates need for {userList(testUsers)}
        Object.values(this.state.users)


    setCurrentUser = (currentUser) => {
        this.setState({ currentUser })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewUserForm
                    getUsersFromServer={this.getUsersFromServer}
                />
            </aside>
            <article className='mainContent'>
                <div>
                    <h1>Users</h1>
                    {userList(this.getAllUsers(), this.state.currentUser, this.setCurrentUser)}
                </div>
            </article>
        </div>
    )
}
// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE