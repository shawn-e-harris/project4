import React from "react"
import Axios from "axios"

// this is the class component that will set the state of the CheckListItem component  
const initialState = {
    newCheckListItem: {
        checkListName: "",
        status: false,
        bucketListItemId: 1,
        // bucketListItemId: this.props.match.params.id,
    }
}
export default class NewCheckListItemForm extends React.Component {
    state = { ...initialState }

    handleInput = (event) => {
        let newCheckListItem = { ...this.state.newCheckListItem };
        newCheckListItem[event.target.name] = event.target.value;
        this.setState({ newCheckListItem })
    }

    clearForm = () => {
        this.setState({ ...initialState })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // calls post req to pass state of newCheckListItem
        // path, data that's being posted
        Axios.post(`/api/user/${this.props.match.params.id}/bucketlistitem/`, this.state.newCheckListItem)
            .then(() => {
                // props allows call from server
                this.props.getCheckListItemsFromServer()
            })
            .then(() => {
                this.clearForm()
            })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="checkListName" value={this.state.newCheckListItem.checkListName} onChange={this.handleInput} placeholder="Check List Item Name" />
            <input type="submit" value="New Check List Item" />
        </form>
    )
}