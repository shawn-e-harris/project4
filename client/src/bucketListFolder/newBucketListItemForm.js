import React from "react"
import Axios from "axios"

// this is the class component that will set the state of the BucketListItem component  
const initialState = {
    newBucketListItem: {
        bucketListItemName: "",
    }
}
export default class NewBucketListItemForm extends React.Component {
    state = {...initialState}

    handleInput = (event) => {
        let newBucketListItem = { ...this.state.newBucketListItem };
        newBucketListItem[event.target.name] = event.target.value;
        this.setState({newBucketListItem})
    }

    clearForm = () => {
        this.setState({...initialState})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        Axios.post("/api/bucketlistitem/", this.state.newBucketListItem)
        .then(() => {
            // props allows call from server
            this.props.getBucketListItemsFromServer()
        })
        .then(() => {
            this.clearForm()
        })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="bucketListItemName" value={this.state.newBucketListItem.bucketListItemName} onChange={this.handleInput} placeholder="BucketListItem Name" />
            {/* <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" /> */}
            <input type="submit" value="New BucketListItem" />
        </form>
    )
}