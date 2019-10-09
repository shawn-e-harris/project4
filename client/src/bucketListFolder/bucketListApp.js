import React from "react"
import Axios from "axios"
import NewBucketListItemForm from "./NewBucketListItemForm"
import { bucketListItemList } from "../importsFolder/functions"
// import getSingleBucketListItem from "./getSingleBucketListItem"

export default class BucketListItemApp extends React.Component {

    state = {
        currentBucketListItem: 1,
        bucketListItems: []
    }

    // functon knows about state b/c it lives here
    getBucketListItemsFromServer = () => {

        Axios.get(`/api/bucketlistitem/`) //get prefix
            .then(res => {
                this.setState({ bucketListItems: res.data })
            })//create promise
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.getBucketListItemsFromServer()
    }

    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        Object.values(this.state.bucketListItems)


    render = () => (
        <div className='container'>
                {/* <NewBucketListItemForm
                    getBucketListItemsFromServer={this.getBucketListItemsFromServer}
                /> */}
                    <h1>BucketListItems</h1>
                    {bucketListItemList(this.getAllBucketListItems())}
                    {/* <getSingleBucketListItem /> */}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE