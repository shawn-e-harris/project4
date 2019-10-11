import React from "react"
import Axios from "axios"

// this is the class component that will set the state of the CheckListItem component  
const initialState = {
    newCheckListItem: {
        checkListName: "",
        status: false,
    }
}

export default class CLForm extends React.Component {
    state = { ...initialState }

    handleInput = (event) => {
        let newCheckListItem = { ...this.state.newCheckListItem };
        newCheckListItem[event.target.name] = event.target.value;
        this.setState({ newCheckListItem })
    }

    clearForm = () => {
        this.setState({ ...initialState })
    }

    componentDidMount = () => {
        this.findTheBucketListItem()
    }

    findTheBucketListItem = () => {
        let bucketId = this.props.match.params.bucketId
        // console.log("The user id is " + bucketId)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // extraction from an object
        const { bucketId } = this.props.match.params;
        const { newCheckListItem } = this.state;
        // merges objects right to left, (newCheckListItem goes into {bucketId:bucketId}).. and so on
        const payload = Object.assign({}, { bucketId: bucketId }, newCheckListItem)
        // calls post req to pass state of newCheckListItem
        // path, data that's being posted
        Axios.post(`/api/checklistitem/`, payload)
            .then(() => {
                this.clearForm()
                window.location.reload();
            })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="checkListName" value={this.state.newCheckListItem.checkListName} onChange={this.handleInput} placeholder="Check List Item Name" />
            <input type="submit" value="New Check List Item" />
        </form>
    )
}