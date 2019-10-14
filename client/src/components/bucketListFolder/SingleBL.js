import React from 'react'
import Axios from 'axios'
import CLForm from "../checkListFolder/CLForm"
import CLApp from "../checkListFolder/CLApp"
import 'bulma/css/bulma.css'
import Navbar from "../CSS/navbar"
import StickyCL from "../CSS/stickyCL"

export default class SingleBL extends React.Component {
    state = {
        bucketListItem: {}
    }

    getSingleBucketListItem = () =>
        Axios.get(`/api/bucketlistitem/${this.props.match.params.bucketId}/`)
            .then(res => {
                this.setState({ bucketListItem: res.data })
            })

    getRelatedBucketListItems = () => {

        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
            .then(res => {
                this.setState({ allBucketListItems: res.data })
            })

    }

    componentDidMount() {
        this.getSingleBucketListItem();
        this.getRelatedBucketListItems();
    }



    render() {
        return (
            <div>
                <Navbar/>
                {/* <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/user">Users</a></li>
                        {/* <li><a href={`/user/${user.userName}/`}>{user.userName}</a></li> */}
                        {/* <li class="is-active"><a href={`/user/${this.state.bucketListItem.bucketListName}/`}>{this.state.bucketListItem.bucketListName}</a></li>
                    </ul>
                </nav> */} 
                <br/>
                <CLForm {...this.props}
                    bucketId={this.state.bucketListItem.id}
                />
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48"
                                >
                                    <img src={this.state.bucketListItem.picture} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{this.state.bucketListItem.bucketListName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <CLApp {...this.props}
                />
                <StickyCL/>
            </div>
        )
    }
}
//map through the bucklist state and display it here
