import React from "react"
import Axios from "axios"
import 'bulma/css/bulma.css'

// this is the class component that will set the state of the CheckListItem component  
const initialState = {
    newCheckListItem: {
        checkListName: "",
        status: false,
    }
}

const styling = {
    form: {
        width: "300px"
    },
    button: {
        backgroundColor: "black"
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
        <div class="control">
        <form onSubmit={this.handleSubmit}>
            <input style={styling.form} class="input" type="text" name="checkListName" value={this.state.newCheckListItem.checkListName} onChange={this.handleInput} placeholder="Check List Item Name" />
            <input style={styling.button} class="button is-primary" type="submit" value="New Check List Item" />
        </form>
        </div>
    )
}