// import React from "react"
// import Axios from "axios"
// import NewUserForm from "./NewUserForm"

// // shows userName as option for select tag and stores id as value
// const userPreview = (user) => (
//     <option value={user.id}>{user.userName}</option>
// )

// // changes value of UserId to match User selected
// const userList = (users, currentUserId, onChange) => (
//     <select value={currentUserId} onChange={(event) => onChange(event.target.value)}>
//         {users.map(userPreview)}
//     </select>
// )

// // changed to add userNumber to match state in the App Component
// const testUsers =
// {
//     1:
//     {
//         id: 1,
//         userName: "Shawn",
//         email: "Shawn@SoftwareEngineer.com",
//     },
//     7:
//     {
//         id: 7,
//         userName: "Asha",
//         email: "Asha@UXDesigner.com",
//     }
// }

// // const getUsersFromServer = () =>
// //     fetch("/api/user/")
// //         .then(res => res.json())
// //             .then((users) => objectFromListById(users))

// const getUsersFromServer = () => {
//     Axios.get("/api/user/") //get prefix
//         .then(res => res.json())// //create promise
//             // this.setState({ activities: results.data.allActivities })
//             // console.log(res.data)
//             // console.table(results.data.allActivities)
//         //})
//         .catch(error => {
//             console.log(error)
//         })
// }

// // const saveUserToServer = (newUser) =>
// //     fetch('/api/user/',
// //         {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(newUser)
// //         }
// //     ).then(res => {
// //         console.log('save user to server response', res)
// //         res.json()
// //     })
// //         .catch((error) => {
// //             console.log(error)
// //         })

// Axios.post("/api/user", userName)
//             .then(results => {
//                 this.setState({ userName: results.data.userName })
//                 // console.log('save user to server response', res)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
    



// const objectFromListById = (users) =>
//     //convert from an array of user objects to an
//     //object of user objects where the keys are user ids
//     users.reduce((obj, user) => {
//         //get all issues belonging to the user
//         // user.issues = issues.filter(issue => issue.user === user.id);
//         obj[user.id] = user;
//         return obj;
//     }, {})

// class UserApp extends React.Component {

//     state = {
//         currentUser: 1,
//         users: testUsers
//         // users: []
//     }

//     // componentDidMount = () => {
//     //     getUsersFromServer()
//     //         .then(users => {
//     //             this.setState({ users })
//     //         })
//     // }

//     componentDidMount() {
//         this.getUsersFromServer();
//     }

//     // getNextUserId = () =>
//     //     Math.max(...this.getAllUsers().map(user => user.id)) + 1

//     addNewUser = (newUserInfo) => {
//         // console.log('newuserinfo', newUserInfo)
//         this.saveUserToServer(newUserInfo)
//             .then(newUser => {
//                 console.log(newUser)
//                 // newUser.issues = [];
//                 //newUser.id = this.getNextUserId();

//                 let users = { ...this.state.users }

//                 users[newUser.id] = newUser;

//                 this.setState({ users, currentUser: newUser.id });
//             })
//     }

//     getCurrentUser = () =>
//         // will also need to change .map in 
//         this.state.users[this.state.currentUser]


//     getAllUsers = () =>
//         Object.values(this.state.users)


//     setCurrentUser = (currentUser) => {
//         this.setState({ currentUser })
//     }

//     render = () => (
//         <div className='container'>
//             <aside className='sidebar'>
//                 <NewUserForm addNewUser={this.addNewUser} />
//             </aside>
//             <article className='mainContent'>

//                 <div>
//                     <h1>Users</h1>
//                     {userList(this.getAllUsers(), this.state.currentUser, this.setCurrentUser)}
//                 </div>
//             </article>
//         </div>
//     )
// }
// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE

// export default UserApp;