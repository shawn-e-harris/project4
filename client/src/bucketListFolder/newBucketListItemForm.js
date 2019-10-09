import React from "react"
import Axios from "axios"

// this is the class component that will set the state of the BucketListItem component  
const initialState = {
    newBucketListItem: {
        bucketListName: "",
        status: false,
        // userId: null
        // userId: this.props.match.userId
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
    componentDidMount = () => {
       this.findTheUser()
    }
    findTheUser = () => {
        let userId = this.props.match.params.userId
        console.log("The user id is " + userId)
        // this.setState({newBucketListItem.userId:})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // extraction from an object
        const {userId} = this.props.match.params;
        const {newBucketListItem} = this.state;
        // merges objects right to left, (newBucketListItem goes into {userId:userId}).. and so on
        const payload = Object.assign({}, {userId:userId}, newBucketListItem)
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        // Axios.post(`/api/user/${this.props.match.params.userId}/bucketlistitem/`, this.state.newBucketListItem)
        Axios.post(`/api/bucketlistitem/`, payload)
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
        console.log(this.state.newBucketListItem)
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