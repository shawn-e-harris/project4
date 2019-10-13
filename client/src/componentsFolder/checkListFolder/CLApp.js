import React from "react"
import Axios from "axios"
import { checkListItemList } from "../importsFolder/functions"
import 'bulma/css/bulma.css'

export default class CLApp extends React.Component {

    state = {
        currentCheckListItem: 1,
        checkListItems: [],
        allCheckListItems: [],
        specificCList: []
    }

    getRelatedCheckListItems = () => {
        // create empty array for userBucketListItems
        let bucketListCheckListItems = []
        // this.props.match.params.bucketId is string, need integer
        const bucketId = parseInt(this.props.match.params.bucketId)

        //get all bucket list items
        Axios.get("/api/checklistitem/")
            .then(res => {
                this.setState({ allCheckListItems: res.data })
                for (let i = 0; i < this.state.allCheckListItems.length; i++) {

                    if (bucketId === this.state.allCheckListItems[i].bucketId) {
                        bucketListCheckListItems.push(this.state.allCheckListItems[i])
                        this.setState({ specificCList: bucketListCheckListItems })
                    }
                }
            })
    }

    componentDidMount = () => {
        this.getRelatedCheckListItems()
    }

    getAllCheckListItems = () =>
        // eliminates need for {checkListItemList(testCheckListItems)}
        // changed state of specificClist instead of checkListItems
        Object.values(this.state.specificCList)


    render = () => (
        <div className='container'>
            <h1>CheckListItems</h1>
            {checkListItemList(this.getAllCheckListItems())}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE