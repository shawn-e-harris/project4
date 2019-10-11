import React from 'react'
import Axios from 'axios'
import BLForm from "../bucketListFolder/BLForm"
import BLApp from '../bucketListFolder/BLApp'
import {Redirect} from 'react-router-dom'

export default class SingleU extends React.Component {
    state = {
        user: {},
        redirectToUser: false
    }

    getSingleUser = () =>
        Axios.get(`/api/user/${this.props.match.params.userId}/`)
            .then(res => {
                this.setState({ user: res.data })
            })

    componentDidMount() {
        this.getSingleUser()
    }

    handleDeleteUser = () => {
        Axios.delete(`/api/user/${this.props.match.params.userId}/`)
        .then(() => {
            // this is the trigger to change setState for redirectToHome
            this.setState({redirectToUser: true})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        // conditional rendering for redirectToHome is truthy
        if(this.state.redirectToUser) {
            return(
                <Redirect to="/user" />
            )
        }
        return (
            <div>
                <BLForm {...this.props}
                    userId={this.state.user.id}
                />
                <p>{this.state.user.id} <br />{this.state.user.userName} <br /> {this.state.user.email}</p> <img src={this.state.user.picture}/>
                <button onClick={this.handleDeleteUser}>Delete</button>
                <BLApp {...this.props}
                />
            </div>
        )
    }
}
