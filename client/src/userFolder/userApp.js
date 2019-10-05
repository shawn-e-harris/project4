import React from "react"
import NewUserForm from "./NewUserForm"

// shows userName as option for select tag and stores id as value
const userPreview = (user) => (
    <option value={user.id}>{user.userName}</option>
)


const userList = (users, currentUserId, onChange) => (
    // <select value ={currentUserId} onChange={(evnt)=> onChange(evnt.target.value)}>
    <select value={currentUserId} onChange={(event) => onChange(event.target.value)}>
        {users.map(userPreview)}
    </select>
)

// changed to add userNumber to match state in the App Component
const testUsers =
{
    1:
    {
        id: 1,
        userName: "Shawn",
        email: "Shawn@SoftwareEngineer.com",
    },
    7:
    {
        id: 7,
        userName: "Asha",
        email: "Asha@UXDesigner.com",
        // issues: [
        //     { description: "a Joe test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
        //     { description: "a Joe test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" },
        //     { description: "a Joe test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" },
        // ]
    }
}

const getUsersFromServer = () =>
    fetch("/api/user/")
        .then(res => res.json())
            .then((users) => objectFromListById(users))

const saveUserToServer = (newUser) =>
    fetch('/api/user/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }
    ).then(res => {
        console.log('saver user to server response', res)
        res.json()
    })
        .catch((error) => {
            console.log(error)
        })

const objectFromListById = (users) =>
    //convert from an array of user objects to an
    //object of user objects where the keys are user ids
    users.reduce((obj, user) => {
        //get all issues belonging to the user
        // user.issues = issues.filter(issue => issue.user === user.id);
        obj[user.id] = user;
        return obj;
    }, {})

class UserApp extends React.Component {

    state = {
        currentUser: 1,
        // users: testUsers
        users: []
    }

    componentDidMount = () => {
        getUsersFromServer()
            .then(users => {
                this.setState({ users })
            })
    }

    getNextUserId = () =>
        Math.max(...this.getAllUsers().map(user => user.id)) + 1

    addNewUser = (newUserInfo) => {
        // console.log('newuserinfo', newUserInfo)
        saveUserToServer(newUserInfo)
            .then(newUser => {
                console.log(newUser)
                // newUser.issues = [];
                //newUser.id = this.getNextUserId();

                let users = { ...this.state.users }

                users[newUser.id] = newUser;

                this.setState({ users, currentUser: newUser.id });
            })
    }

    getCurrentUser = () =>
        // instead of calling {userIssueList(this.state.user[this.state.currentUser]) this helps to reduce redundancy
        // will also need to change .map in 
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
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE

export default UserApp;