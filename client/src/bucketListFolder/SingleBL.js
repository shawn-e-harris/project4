import React from 'react'
import Axios from 'axios'
import CLForm from "../checkListFolder/CLForm"
import CLApp from "../checkListFolder/CLApp"

export default class SingleBL extends React.Component {
    state = {
        bucketListItem: {}
    }

    getSingleBucketListItem = () =>
    Axios.get(`/api/bucketlistitem/${this.props.match.params.bucketId}/`)
    .then(res => {
        this.setState({bucketListItem: res.data})
    })

    getRelatedBucketListItems = () =>{

        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
        .then(res => {
            this.setState({allBucketListItems: res.data})
        })
        
    }

    componentDidMount() {
        this.getSingleBucketListItem();
        this.getRelatedBucketListItems();
    }

    render() {
        return (
            <div>
                <CLForm {...this.props}
                bucketId= {this.state.bucketListItem.id}
                />
                <p>{this.state.bucketListItem.id} <br/>{this.state.bucketListItem.bucketListName} <br/> {this.state.bucketListItem.status} </p> 
                <CLApp {...this.props}
                />
            </div>
        )
    }
}
//map through the bucklist state and display it here
