import React from "react"
import Axios from "axios"
import NewBucketListItemForm from "./NewBucketListItemForm"
import { bucketListItemList } from "../importsFolder/functions"
// import getSingleBucketListItem from "./getSingleBucketListItem"

export default class BucketListItemApp extends React.Component {

    state = {
        currentBucketListItem: 1,
        bucketListItems: [],
        allBucketListItems: [],
        specificBList: []
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

    getRelatedBucketListItems = () =>{
        // create empty array for userBucketListItems
        let userBucketListItems = []
        // this.props.match.params.userId is string, need integer
        const userId = parseInt(this.props.match.params.userId)

        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
        .then(res => {
            this.setState({allBucketListItems: res.data})
            console.log(this.state.allBucketListItems.length)
            for(let i = 0; i < this.state.allBucketListItems.length;i++){

                if(userId===this.state.allBucketListItems[i].userId){
                    userBucketListItems.push(this.state.allBucketListItems[i])
                    this.setState({specificBList: userBucketListItems})
                }else{
                    console.log("ITS NOT A MATCH")
                }
            }
        })
    }

    componentDidMount = () => {
        this.getBucketListItemsFromServer()
        this.getRelatedBucketListItems()
    }

    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        // changed state of specificBlist instead of bucketListItems
        Object.values(this.state.specificBList)


    render = () => (
        <div className='container'>
                    <h1>BucketListItems</h1>
                    {bucketListItemList(this.getAllBucketListItems())}
                    {/* <getSingleBucketListItem /> */}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE