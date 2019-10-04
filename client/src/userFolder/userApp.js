import React from "react"

// display list of user's email and issues
// const userIssueList = (user) => (
//     <div>
//         {user.email}
//         {/* {issueList(user.issues)} */}
//     </div>
// )

// this shows 1 user as option for select tag 
const userPreview = (user) => (
    <option value={user.id}>{user.userName}</option>
)


const userList = (users, currentUserId, onChange) => (
    // <select value ={currentUserId} onChange={(evnt)=> onChange(evnt.target.value)}>
    <select value={currentUserId} onChange={(event) => onChange(event.target.value)}>
        {users.map(userPreview)}
    </select>
)

// this is the class component that will set the state of the User component  
class NewUserForm extends React.Component {
    state = {
        userName: "",
        email: ""
    }

    handleInput = (event) => {
        let newUser = { ...this.state };
        newUser[event.target.name] = event.target.value;
        this.setState(newUser)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this is just to test to see if the correct data is being called
        // console.log("iss: ", this.state)

        this.props.addNewUser(this.state)
        this.setState({ userName: "", email: "" })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" value={this.state.userName} onChange={this.handleInput} placeholder="User Name" />
            <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
            <input type="submit" value="New User" />
        </form>
    )
}

// changed to add userNumber to match state in the App Component
const testUsers =
{
    1:
    {       
        id: 1,
        email: "Shawn@SoftwareEngineer.com",
        userName: "Shawn",
    },
    7:
    {
        id: 7,
        email: "Asha@UXDesigner.com",
        userName: "Asha",
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

const saveUserToServer = (newUser) =>
  fetch('/api/user/',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    }
  ).then(res => {
      console.log('saver user to server response', res)
      res.json()})
  .catch((error) => {
      console.log(error)
  })

class UserApp extends React.Component {

    state = {
        currentUser: 1,
        users: testUsers
    }

    // componentDidMount = () => {
    //     getUsersandIssuesFromServer()
    //         .then(users => {
    //             this.setState({ users })
    //         })
    // }

    // getNextIssueId = () =>
    //     Math.max(...this.getCurrentUser().issues.map(issue => issue.id)) + 1

    getNextUserId = () =>
        // {
        // Math.max(...this.getAllUsers().map(user => user.id)) === Infinity ? 1 :
        Math.max(...this.getAllUsers().map(user => user.id)) + 1
    // console.log(Math.max(...this.getAllUsers().map(user => user.id)))
    // }


    // // this function below is just to show that the correct information is being called upon submission 
    // addNewIssueCurrentUser = (description) => {
    //     saveIssueToServer({ description, status: true, user: this.state.currentUser })
    //         .then(newIssue => {
    //             let users = { ...this.state.users }

    //             users[this.state.currentUser].issues.push(newIssue);

    //             this.setState({ users });
    //         })
    // }

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


    // getAllIssues = () =>
    //     // .flatMap takes array of array and makes one massive array
    //     // this function is to eliminate {recentIssues(testUsers[0].issues)}
    //     this.getAllUsers().flatMap(user => user.issues)
    // // this.getAllIssues().map(user => user.issues).flat //this is a longer way of doing the .flatMap function above

    setCurrentUser = (currentUser) => {
        this.setState({ currentUser })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewUserForm addNewUser={this.addNewUser} />
                {/* <NewIssueForm addNewIssue={this.addNewIssueCurrentUser} />
                {recentIssues(this.getAllIssues())} */}
            </aside>
            <article className='mainContent'>
                
                            <div>
                                <h1>Users</h1>
                                {userList(this.getAllUsers(), this.state.currentUser, this.setCurrentUser)}
                                {/* <h1>User's Issues</h1> */}
                                {/* {userIssueList(this.getCurrentUser())} */}
                            </div>
                        
            </article>
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE

export default UserApp;