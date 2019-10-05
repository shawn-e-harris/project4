import React from "react"

// this is the class component that will set the state of the User component  
export default class NewUserForm extends React.Component {
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
        // change this.state of userName and email
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