import React from 'react'
import Axios from 'axios'
import NewBucketListItemForm from "../bucketListFolder/NewBucketListItemForm"
import BucketListItemApp from '../bucketListFolder/BucketListApp'

export default class getSingleUser extends React.Component {
    state = {
        user: {}
    }

    // getBucketListItemsFromServer = () => {

    //     Axios.get(`/api/bucketlistitem/`) //get prefix
    //         .then(res => {
    //             console.log("refresh")
    //             this.setState({ bucketListItems: res.data })
    //         })//create promise
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    getSingleUser = () =>
        Axios.get(`/api/user/${this.props.match.params.userId}/`)
            .then(res => {
                this.setState({ user: res.data })
            })

    componentDidMount() {
        this.getSingleUser();
    }

    render() {
        return (
            <div>
                <NewBucketListItemForm {...this.props}
                    getBucketListItemsFromServer={this.getBucketListItemsFromServer}
                    userId={this.state.user.id}
                />
                <p>{this.state.user.id} <br />{this.state.user.userName} <br /> {this.state.user.email} <br /> {this.state.user.picture}</p>
                <BucketListItemApp
                />
            </div>
        )
    }
}
