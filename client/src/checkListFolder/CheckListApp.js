import React from "react"
import Axios from "axios"
// import NewCheckListItemForm from "./NewCheckListItemForm"
import { checkListItemList } from "../importsFolder/functions"


export default class CheckListItemApp extends React.Component {

    state = {
        currentCheckListItem: 1,
        checkListItems: [],
        allCheckListItems: [],
        specificCList: []
    }

    getRelatedCheckListItems = () => {
        // create empty array for userBucketListItems
        let userCheckListItems = []
        // this.props.match.params.userId is string, need integer
        const bucketId = parseInt(this.props.match.params.bucketId)

        //get all bucket list items
        Axios.get("/api/checklistitem/")
            .then(res => {
                this.setState({ allCheckListItems: res.data })
                console.log(this.state.allCheckListItems.length)
                for (let i = 0; i < this.state.allCheckListItems.length; i++) {

                    if (bucketId === this.state.allCheckListItems[i].bucketId) {
                        userCheckListItems.push(this.state.allCheckListItems[i])
                        this.setState({ specificCList: userCheckListItems })
                    } else {
                        console.log("ITS NOT A MATCH")
                    }
                }
            })
    }

    // // functon knows about state b/c it lives here
    // getCheckListItemsFromServer = () => {
    //     Axios.get(`/api/user/${this.props.match.params.userId}/bucketlistitem/${this.props.match.params.bucketId}/checklistitem/`) //get prefix
    //         .then(res => {
    //             this.setState({ checkListItems: res.data })
    //         })// //create promise
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    componentDidMount = () => {
        // this.getCheckListItemsFromServer()
        this.getRelatedCheckListItems()
    }

    // getCurrentCheckListItem = () =>
    //     // instead of calling {checkListItemIssueList(this.state.checkListItem[this.state.currentCheckListItem]) this helps to reduce redundancy
    //     this.state.checkListItems[this.state.currentCheckListItem]


    getAllCheckListItems = () =>
        // eliminates need for {checkListItemList(testCheckListItems)}
        // changed state of specificClist instead of checkListItems
        Object.values(this.state.specificCList)


    // setCurrentCheckListItem = (currentCheckListItem) => {
    //     this.setState({ currentCheckListItem })
    // }

    render = () => (
        <div className='container'>
            {/* <aside className='sidebar'>
                <NewCheckListItemForm
                    getCheckListItemsFromServer={this.getCheckListItemsFromServer}
                />
            </aside> */}
            {/* <article className='mainContent'>
                <div> */}
                    <h1>CheckListItems</h1>
                    {checkListItemList(this.getAllCheckListItems())}
                {/* </div>
            </article> */}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE