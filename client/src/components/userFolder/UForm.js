import React from "react"
import Axios from "axios"
import 'bulma/css/bulma.css'

// this is the class component that will set the state of the User component  
const initialState = {
    newUser: {
        userName: "",
        email: "",
        picture: ""
    }
}

const styling = {
    form: {
        width: "300px",
        margin: "0px 35px 0px 35px"
    },
    button: {
        backgroundColor: "black",
        margin: "0px 35px 0px 35px"
    }
}

export default class UForm extends React.Component {
    state = { ...initialState }

    handleInput = (event) => {
        let newUser = { ...this.state.newUser };
        newUser[event.target.name] = event.target.value;
        this.setState({ newUser })
    }

    clearForm = () => {
        this.setState({ ...initialState })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        Axios.post("/api/user/", this.state.newUser)
            .then(() => {
                // props allows call from server
                this.props.getUsersFromServer()
            })
            .then(() => {
                this.clearForm()
            })
    }

    render = () => (
            <div class="control">
        <form onSubmit={this.handleSubmit}>
            <input style={styling.form} class="input" type="text" name="userName" value={this.state.newUser.userName} onChange={this.handleInput} placeholder="User Name" />
            <input style={styling.form} class="input" type="email" name="email" value={this.state.newUser.email} onChange={this.handleInput} placeholder="Email" />
            <input style={styling.form} class="input" type="text" name="picture" value={this.state.newUser.picture} onChange={this.handleInput} placeholder="Picture" />
            <input style={styling.button} class="button is-primary" type="submit" value="New User" />
        </form>
  </div>
    )
}