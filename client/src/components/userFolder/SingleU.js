import React from 'react'
import Axios from 'axios'
import BLForm from "../bucketListFolder/BLForm"
import BLApp from '../bucketListFolder/BLApp'
import Navbar from "../CSS/navbar"
import { Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'
import Sticky from "../CSS/sticky"

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
                this.setState({ redirectToUser: true })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        // conditional rendering for redirectToHome is truthy
        if (this.state.redirectToUser) {
            return (
                <Redirect to="/user" />
            )
        }
        return (
            <div>
                <Navbar />
                <br />
                <BLForm {...this.props}
                    userId={this.state.user.id}
                />
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src={this.state.user.picture} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{this.state.user.userName}
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <a class="delete is-large" onClick={this.handleDeleteUser}></a>
                                </p>
                                <p class="subtitle is-6">{this.state.user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BLApp {...this.props}
                />
                <Sticky />
            </div>
        )
    }
}
