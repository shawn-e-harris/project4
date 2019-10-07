import React from "react"
import Axios from "axios"


// this is the class component that will set the state of the User component  
export default class NewUserForm extends React.Component {
    state = {
        newUser: {
            userName: "",
            email: ""
        }
    }
    
    redirectHome = () => {
        Axios.get("/api/user/") //get prefix
            .then(res => {
                this.setState({ users: res.data })
            })// //create promise
            .catch(error => {
                console.log(error)
            })
    }

    handleInput = (event) => {
        let newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({ newUser })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newUser
        // path, data that's being posted
        Axios.post("/api/user/", this.state.newUser)
            .then(() => {
                this.redirectHome()
                console.log("posted")
            })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" value={this.state.newUser.userName} onChange={this.handleInput} placeholder="User Name" />
            <input type="email" name="email" value={this.state.newUser.email} onChange={this.handleInput} placeholder="Email" />
            <input type="submit" value="New User" />
        </form>
    )
}