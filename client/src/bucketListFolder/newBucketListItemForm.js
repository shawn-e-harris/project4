import React from "react"
import Axios from "axios"

// this is the class component that will set the state of the BucketListItem component  
const initialState = {
    newBucketListItem: {
        bucketListName: "",
        status: false,
        userId: 2
        // userId: this.props.match.userId
        // userId: this.props.match.params.userId,
    }
}
export default class NewBucketListItemForm extends React.Component {
    state = { ...initialState }

    handleInput = (event) => {
        let newBucketListItem = { ...this.state.newBucketListItem };
        newBucketListItem[event.target.name] = event.target.value;
        this.setState({ newBucketListItem })
    }

    clearForm = () => {
        this.setState({ ...initialState })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        // Axios.post(`/api/user/${this.props.match.params.userId}/bucketlistitem/`, this.state.newBucketListItem)
        Axios.post(`/api/bucketlistitem/`, this.state.newBucketListItem)
            .then(() => {
                // props allows call from server
                // this.props.getBucketListItemsFromServer()
            })
            .then(() => {
                this.clearForm()
            })
    }
    testMe = () => {
        console.log("TEST ME MAAAANNN")
        console.log(this.props.match.params.userId)
    }

    userIdInput = (event) => {
        let userId = (this.props.match.params.userId)
    }

    render = () => (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="userId" value={this.props.match.params.userId} onChange={this.handleInput}/>
                <input type="text" name="bucketListName" value={this.state.newBucketListItem.bucketListName} onChange={this.handleInput} placeholder="Bucket List Item Name" />
                <input type="submit" value="New Bucket List Item" />
                
            </form>
            <button onClick={this.testMe}>TEST</button>
        </div>
    )
}