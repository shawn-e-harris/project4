import React from "react"
import NewUserForm from "./NewUserForm"
import { userList, users, getUsersFromServer } from "../importsFolder/functions"

// changed to add checkListItemNumber to match state in the App Component
// const testUsers =
// {
//     1:
//     {
//         id: 1,
//         checkListItemName: "Shawn",
//         email: "Shawn@SoftwareEngineer.com",
//         bucketListItem: [
//             {
//                 id: 1, bucketListItemName: "test checkListItem", status: "False", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             },
//             {
//                 id: 2, bucketListItemName: "test 2nd bucketListItem", status: "True", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             },
//             {
//                 id: 3, bucketListItemName: "test 3rd bucketListItem", status: "False", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             }
//         ]
//     },
//     7:
//     {
//         id: 7,
//         checkListItemName: "Asha",
//         email: "Asha@UXDesigner.com",
//         bucketListItem: [
//             {
//                 id: 1, bucketListItemName: "test checkListItem", status: "False", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             },
//             {
//                 id: 2, bucketListItemName: "test 2nd bucketListItem", status: "True", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             },
//             {
//                 id: 3, bucketListItemName: "test 3rd bucketListItem", status: "False", checkListItem: [
//                     { id: 1, checkListItemName: "test checkListItem", status: "True" },
//                     { id: 2, checkListItemName: "test 2nd checkListItem", status: "True" },
//                     { id: 3, checkListItemName: "test 2nd checkListItem", status: "True" }
//                 ]
//             }
//         ]
//     }
// }

export default class UserApp extends React.Component {

    state = {
        currentUser: 1,
        users: []
            // id: 1,
            // email: "",
            // picture: "",
            // bucketListItem: [
            //     {
            //         id: 1, bucketListItemName: "", status: "", checkListItem: [
            //             { id: 1, checkListItemName: "", status: "" }
            //         ]
            //     }
            // ]
        
    }

    // functon knows about state b/c it lives here
    // getUsersFromServer = () => {
    //     Axios.get("/api/user/") //get prefix
    //         .then(res => {
    //             this.setState({ users: res.data })
    //         })// //create promise
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    componentDidMount = () => {
        //this.getUsersFromServer()
        getUsersFromServer()
            .then(() => {
                this.setState({ users })
                // console.log(users[0])
                // console.log(users[0].email)
            })
        //console.log(this.state.users)
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
                    addNewUser={this.addNewUser}
                    getUsersFromServer={getUsersFromServer}
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