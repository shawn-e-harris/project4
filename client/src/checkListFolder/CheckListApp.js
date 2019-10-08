import React from "react"
import Axios from "axios"
import NewCheckListItemForm from "./NewCheckListItemForm"
import { checkListItemList } from "../importsFolder/functions"

export default class CheckListItemApp extends React.Component {

    state = {
        currentCheckListItem: 1,
    }

    // functon knows about state b/c it lives here
    getCheckListItemsFromServer = () => {
        Axios.get(`/api/user/${this.props.match.params.userId}/bucketlistitem/${this.props.match.params.bucketId}/checklistitem/`) //get prefix
            .then(res => {
                this.setState({ checkListItems: res.data })
            })// //create promise
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.getCheckListItemsFromServer()
    }

    getCurrentCheckListItem = () =>
        // instead of calling {checkListItemIssueList(this.state.checkListItem[this.state.currentCheckListItem]) this helps to reduce redundancy
        this.state.checkListItems[this.state.currentCheckListItem]


    getAllCheckListItems = () =>
        // eliminates need for {checkListItemList(testCheckListItems)}
        Object.values(this.state.checkListItems)


    setCurrentCheckListItem = (currentCheckListItem) => {
        this.setState({ currentCheckListItem })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewCheckListItemForm
                    getCheckListItemsFromServer={this.getCheckListItemsFromServer}
                />
            </aside>
            <article className='mainContent'>
                <div>
                    <h1>CheckListItems</h1>
                    {checkListItemList(this.getAllCheckListItems(), this.state.currentCheckListItem, this.setCurrentCheckListItem)}
                </div>
            </article>
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE