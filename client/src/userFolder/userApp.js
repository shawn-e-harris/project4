import React from "react"
import NewUserForm from "./NewUserForm"
// import {getUsersFromServer} from "./UserAPICalls"
import {userList} from "../importsFolder/functions"
import {saveUserToServer} from "../userFolder/UserAPICalls"
import Axios from "axios"

// test data for user
const testUsers = [
{ id: 1, userName: "Shawn", email: "Shawn@SoftwareEngineer.com" },
{ id: 2, userName: "Asha", email: "Asha@UXDesigner.com" },
]

class UserApp extends React.Component {

    state = {
        currentUser: 1,
        // users: testUsers
        users: []
    }

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
        console.log(this.state.users)
            // .then(users => {
            //     this.setState({ users })
            // })
    }

    // componentDidMount() {
    //     this.getUsersFromServer();
    // }

    // getNextUserId = () =>
    //     Math.max(...this.getAllUsers().map(user => user.id)) + 1

    // addNewUser = (newUserInfo) => {
    //     // console.log('newuserinfo', newUserInfo)
    //     return saveUserToServer(newUserInfo)
    //         .then(newUser => {
    //             console.log(newUser)
    //             // newUser.issues = [];
    //             //newUser.id = this.getNextUserId();

    //             let users = { ...this.state.users }
    //             // console.log(users)

    //             users[newUser.id] = newUser;

    //             this.setState({ users, currentUser: newUser.id });
    //         })
    // }

    addNewUser = () => {
        fetch('/api/user/')
        .then(res => res.json())
            .then(users => {
                console.log(users)
                this.setState({users})
            })
    }

    getCurrentUser = () =>
        // will also need to change .map in 
        this.state.users[this.state.currentUser]


    getAllUsers = () =>
        Object.values(this.state.users)


    setCurrentUser = (currentUser) => {
        this.setState({ currentUser })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewUserForm addNewUser={this.addNewUser} />
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

export default UserApp;