import React from "react"
import Axios from "axios"
import { bucketListItemList } from "../importsFolder/functions"
import 'bulma/css/bulma.css'

export default class BLApp extends React.Component {

    state = {
        currentBucketListItem: 1,
        bucketListItems: [],
        allBucketListItems: [],
        specificBList: []
    }

    getRelatedBucketListItems = () => {
        // create empty array for userBucketListItems
        let userBucketListItems = []
        // this.props.match.params.userId is string, need integer
        const userId = parseInt(this.props.match.params.userId)

        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
            .then(res => {
                this.setState({ allBucketListItems: res.data })
                for (let i = 0; i < this.state.allBucketListItems.length; i++) {

                    if (userId === this.state.allBucketListItems[i].userId) {
                        userBucketListItems.push(this.state.allBucketListItems[i])
                        this.setState({ specificBList: userBucketListItems })
                    }
                }
            })
    }

    componentDidMount = () => {
        this.getRelatedBucketListItems()
    }

    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        // changed state of specificBlist instead of bucketListItems
        Object.values(this.state.specificBList)

    render = () => (
        <div >
            {bucketListItemList(this.getAllBucketListItems())}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE