import React from "react"
import NewBucketListItemForm from "./NewBucketListItemForm"
import { bucketListItemList, bucketListItems, getBucketListItemsFromServer } from "../importsFolder/functions"

export default class BucketListItemApp extends React.Component {

    state = {
        currentBucketListItem: 1,
        bucketListItems: []
    }

    // functon knows about state b/c it lives here
    // getBucketListItemsFromServer = () => {
    //     Axios.get("/api/bucketlistitem/") //get prefix
    //         .then(res => {
    //             this.setState({ bucketListItems: res.data })
    //         })// //create promise
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    componentDidMount = () => {
        // this.getBucketListItemsFromServer()
        getBucketListItemsFromServer()
            .then(() => {
                this.setState({ bucketListItems })
            })
    }

    getCurrentBucketListItem = () =>
        // instead of calling {bucketListItemIssueList(this.state.bucketListItem[this.state.currentBucketListItem]) this helps to reduce redundancy
        this.state.bucketListItems[this.state.currentBucketListItem]


    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        Object.values(this.state.bucketListItems)


    setCurrentBucketListItem = (currentBucketListItem) => {
        this.setState({ currentBucketListItem })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewBucketListItemForm
                    addNewBucketListItem={this.addNewBucketListItem}
                    getBucketListItemsFromServer={getBucketListItemsFromServer}
                />
            </aside>
            <article className='mainContent'>
                <div>
                    <h1>BucketListItems</h1>
                    {bucketListItemList(this.getAllBucketListItems(), this.state.currentBucketListItem, this.setCurrentBucketListItem)}
                </div>
            </article>
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE