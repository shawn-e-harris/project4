import React from 'react'
import Axios from 'axios'
import NewBucketListItemForm from "../bucketListFolder/NewBucketListItemForm"
import BucketListItemApp from '../bucketListFolder/BucketListApp'

export default class GetSingleUser extends React.Component {
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
                <NewBucketListItemForm {...this.props}
                    userId={this.state.user.id}
                />
                <p>{this.state.user.id} <br />{this.state.user.userName} <br /> {this.state.user.email} <br /> {this.state.user.picture}</p>
                <BucketListItemApp {...this.props}
                />
            </div>
        )
    }
}
