import React from 'react'
import Axios from 'axios'
import CLForm from "../checkListFolder/CLForm"
import CLApp from "../checkListFolder/CLApp"
import {Redirect} from 'react-router-dom'

export default class SingleBL extends React.Component {
    state = {
        bucketListItem: {},
        redirectToBL: false
    }

    getSingleBucketListItem = () => {
    Axios.get(`/api/bucketlistitem/${this.props.match.params.bucketId}/`)
    .then(res => {
        console.log(res)
        this.setState({bucketListItem: res.data})
    })
}

    getRelatedBucketListItems = () =>{

        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
        .then(res => {
            this.setState({allBucketListItems: res.data})
            // console.log(this.state.allBucketListItems)
        })
        
    }

    componentDidMount() {
        this.getSingleBucketListItem();
        this.getRelatedBucketListItems();
    }

    handleDeleteBL = () => {
        Axios.delete(`/api/bucketlistitem/${this.props.match.params.bucketId}/`)
        .then(() => {
            // this is the trigger to change setState for redirectToHome
            this.setState({redirectToBL: true})
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {
        // conditional rendering for redirectToHome is truthy
        if(this.state.redirectToBL) {
            return(
                this.getRelatedBucketListItems
            )
        }
        return (
            <div>
                <CLForm {...this.props}
                bucketId= {this.state.bucketListItem.id}
                />
                <p>{this.state.bucketListItem.id} <br/>{this.state.bucketListItem.bucketListName} <br/> {this.state.bucketListItem.status} </p> 
                <button onClick={this.handleDeleteBL}>Delete</button>
                <CLApp {...this.props}
                />
            </div>
        )
    }
}
//map through the bucklist state and display it here
