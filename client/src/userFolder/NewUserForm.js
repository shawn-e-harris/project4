import React from "react"
import Axios from "axios"


// this is the class component that will set the state of the User component  
export default class NewUserForm extends React.Component {
    state = {
        newUser: {
            userName: "",
            email: "",
            redirectHome: false 
        }
    }

    handleInput = (event) => {
        let newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({ newUser })
        this.setState({ redirectHome: true })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newUser
        // path, data that's being posted
        Axios.post("/api/user/", this.state.newUser)
        .then(() => {
            // props allows call from server
            this.props.getUsersFromServer()
        })
        // this.state.redirectHome ?  Axios.get("/api/user/") : null

    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" value={this.state.newUser.userName} onChange={this.handleInput} placeholder="User Name" />
            <input type="email" name="email" value={this.state.newUser.email} onChange={this.handleInput} placeholder="Email" />
            <input type="submit" value="New User" />
        </form>
    )
}