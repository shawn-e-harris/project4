import React from "react"
import './App.css';
// displays on screen issue id and description on 
const issuePreview = (issue) => (
  <li>
    {issue.id} - {issue.description}
  </li>
)
// shows list of issues mapped as array
const issueList = (issues) => (
  <ul>
    {issues.map(issuePreview)}
  </ul>
)
// display list of user's email and issues
const userIssueList = (user) => (
  <div>
    {user.email}
    {issueList(user.issues)}
  </div>
)
// gives 5 most recent issues for all users
const recentIssues = (allIssues) =>
  issueList(allIssues.sort(orderedByCreatedOn).slice(0, 5))
const issueDetails = (issue) => ( //() after => is for a function that only return JSX code, otherwise use {}
  <div>
    {issue.id} - {issue.description}
    <button>
      {issue.status ? "Close" : "Open"}
    </button>
  </div>
)
// this shows 1 user as option for select tag 
const userPreview = (user) => (
  <option value={user.id}>{user.name}</option>
)
const userList = (users, currentUserId, onChange) => (
  // <select value ={currentUserId} onChange={(evnt)=> onChange(evnt.target.value)}>
  <select value={currentUserId} onChange={(event) => onChange(event.target.value)}>
    {users.map(userPreview)}
  </select>
)
// this is the class component that will set the state of the description component 
class NewIssueForm extends React.Component {
  state = {
    description: ""
  }
  handleInput = (event) => {
    this.setState({ description: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // this is just to test to see if the correct data is being called
    console.log("desc: ", this.state.description)
    this.props.addNewIssue(this.state.description)
    this.setState({ description: "" })
  }
  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Description" />
      <input type="submit" value="New Issue" />
    </form>
  )
}
const orderedByCreatedOn = (issue1, issue2) => {
  let date1 = new Date(issue1.createdOn)
  let date2 = new Date(issue2.createdOn)
  // takes in date as string, return int in Unix Epach time (the number of ms since Jan 1 1970)
  return (Math.sign(date2.getTime() - date1.getTime()))
}
// this is the class component that will set the state of the User component  
class NewUserForm extends React.Component {
  state = {
    name: "",
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
    console.log("iss: ", this.state)
    this.props.addNewUser(this.state)
    this.setState({ name: "", email: "" })
  }
  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="User Name" />
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
    email: "foo@foo.com",
    name: "Bob",
    id: 1,
    issues: [
      { description: "a test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
      { description: "a test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" },
      { description: "a test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" },
      { description: "a test issue 4", id: 4, createdOn: "2019-09-30T15:05:18.180058Z" },
      { description: "a test issue 5", id: 5, createdOn: "2019-10-01T15:05:18.180058Z" }
    ]
  },
  7:
  {
    id: 7,
    email: "bar@bar.com",
    name: "Joe",
    issues: [
      { description: "a Joe test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
      { description: "a Joe test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" },
      { description: "a Joe test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" },
    ]
  }
}
// this was giving an error, we were getting HTML instead of JSON data because we didn't have a trailing slash
const getUsersFromServer = () =>
  fetch("/api/user/")
    .then(res => res.json())
const getIssuesFromServer = () =>
  fetch("/api/issueitem/")
    .then(res => res.json())
const getUsersandIssuesFromServer = () =>
  getUsersFromServer().then(users =>
    getIssuesFromServer().then(issues =>
      objectFromListById(users, issues)))
const objectFromListById = (users, issues) =>
  //convert from an array of user objects to an
  //object of user objects where the keys are user ids
  users.reduce((obj, user) => {
    //get all issues belonging to the user
    user.issues = issues.filter(issue => issue.user === user.id);
    obj[user.id] = user;
    return obj;
  }, {})
const saveUserToServer = (newUser) =>
  fetch('/api/user/',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    }
  ).then(res => res.json())
const saveIssueToServer = (newIssue) =>
  fetch('/api/issueitem/',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIssue)
    }
  ).then(res => res.json())
// this is to modify state and call specific user AND ISSUE
class App extends React.Component {
  state = {
    currentUser: 1,
    users: testUsers
  }
  componentDidMount = () => {
    getUsersandIssuesFromServer()
      .then(users => {
        this.setState({ users })
      })
  }
  getNextIssueId = () =>
    Math.max(...this.getCurrentUser().issues.map(issue => issue.id)) + 1
  getNextUserId = () =>
    Math.max(...this.getAllUsers().map(user => user.id)) + 1
  
  // this function below is just to show that the correct information is being called upon submission 
  addNewIssueCurrentUser = (description) => {
    saveIssueToServer({ description, status: true, user: this.state.currentUser })
      .then(newIssue => {
        let users = { ...this.state.users }
        users[this.state.currentUser].issues.push(newIssue);
        this.setState({ users });
      })
  }
  addNewUser = (newUserInfo) => {
    saveUserToServer(newUserInfo)
      .then(newUser => {
        console.log(newUser)
        newUser.issues = [];
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
  getAllIssues = () =>
    this.getAllUsers().flatMap(user => user.issues)
  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }
  render = () => (
    <div className='container'>
      <aside className='sidebar'>
        <NewUserForm addNewUser={this.addNewUser} />
        <NewIssueForm addNewIssue={this.addNewIssueCurrentUser} />
        {recentIssues(this.getAllIssues())}
      </aside>
      <article className='mainContent'>
        {userList(this.getAllUsers(), this.state.currentUser, this.setCurrentUser)}
        {userIssueList(this.getCurrentUser())}
      </article>
    </div>
  )
}
export default App;