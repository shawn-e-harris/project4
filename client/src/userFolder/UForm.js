import React from "react"
import Axios from "axios"
import styled from "styled-components"

const PageWrapper = styled.div`
background-color: red;
`





// this is the class component that will set the state of the User component  
const initialState = {
    newUser: {
        userName: "",
        email: "",
        picture: ""
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

        <form onSubmit={this.handleSubmit}>
            <PageWrapper>
                Hello
            </PageWrapper>
            <input type="text" name="userName" value={this.state.newUser.userName} onChange={this.handleInput} placeholder="User Name" />
            <input type="email" name="email" value={this.state.newUser.email} onChange={this.handleInput} placeholder="Email" />
            <input type="text" name="picture" value={this.state.newUser.picture} onChange={this.handleInput} placeholder="Picture" />
            <input type="submit" value="New User" />
        </form>
    )
}