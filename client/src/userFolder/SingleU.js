import React from 'react'
import Axios from 'axios'
import BLForm from "../bucketListFolder/BLForm"
import BLApp from '../bucketListFolder/BLApp'

export default class SingleU extends React.Component {
    state = {
        user: {}
    }

    getSingleUser = () =>
        Axios.get(`/api/user/${this.props.match.params.userId}/`)
            .then(res => {
                this.setState({ user: res.data })
            })

    componentDidMount() {
        this.getSingleUser()
    }

    render() {
        return (
            <div>
                <BLForm {...this.props}
                    userId={this.state.user.id}
                />
                <p>{this.state.user.id} <br />{this.state.user.userName} <br /> {this.state.user.email}</p> <img src={this.state.user.picture}/>
                <BLApp {...this.props}
                />
            </div>
        )
    }
}
