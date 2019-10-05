import React from "react"

// this is the class component that will set the state of the CheckListItem component  
export default class NewCheckListItemForm extends React.Component {
    state = {
        checkListItemName: "",
        email: ""
    }

    handleInput = (event) => {
        let newCheckListItem = { ...this.state };
        newCheckListItem[event.target.name] = event.target.value;
        this.setState(newCheckListItem)
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        // change this.state of checkListItemName and email
        this.props.addNewCheckListItem(this.state)
        this.setState({ checkListItemName: "", email: "" })
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="checkListItemName" value={this.state.checkListItemName} onChange={this.handleInput} placeholder="CheckListItem Name" />
            <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
            <input type="submit" value="New CheckListItem" />
        </form>
    )
}