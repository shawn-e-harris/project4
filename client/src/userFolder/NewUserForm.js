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

    handleInput = (event) => {
        let newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({newUser})
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newUser
        // this.addNewUser(this.state.newUser)

        // path, data that's being posted
        Axios.post("/api/user/", this.state.newUser)
        .then(() => {
            console.log("posted")
        })
        this.setState({ ...this.state.newUser.userName: "", ...this.state.newUser.email: "" })
    }

    // addNewUser = () => {
    //     Axios.post("/api/user/")
    //     .then(() => {
    //     })
    // }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" value={this.state.newUser.userName} onChange={this.handleInput} placeholder="User Name" />
            <input type="email" name="email" value={this.state.newUser.email} onChange={this.handleInput} placeholder="Email" />
            <input type="submit" value="New User" />
        </form>
    )
}