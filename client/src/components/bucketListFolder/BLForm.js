import React from "react"
import Axios from "axios"
import 'bulma/css/bulma.css'

// this is the class component that will set the state of the BucketListItem component  
const initialState = {
    newBucketListItem: {
        bucketListName: "",
        status: false,
        picture: ""
    }
}

const styling = {
    form: {
        width: "300px",
        margin: "5px 35px 5px 35px"
    },
    button: {
        backgroundColor: "black",
        margin: "5px 35px 5px 35px"
    }
}

export default class BLForm extends React.Component {
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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // extraction from an object
        const { userId } = this.props.match.params;
        const { newBucketListItem } = this.state;
        // merges objects right to left, (newBucketListItem goes into {userId:userId}).. and so on
        const payload = Object.assign({}, { userId: userId }, newBucketListItem)
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        Axios.post(`/api/bucketlistitem/`, payload)
        .then(() => {
            this.clearForm()
            window.location.reload();
            })

    }

    render = () => (
        <div class="control">
            <form onSubmit={this.handleSubmit}>
                <input style={styling.form} class="input" type="text" name="bucketListName" value={this.state.newBucketListItem.bucketListName} onChange={this.handleInput} placeholder="Bucket List Item Name" required/>
                <input style={styling.form} class="input" type="text" name="picture" value={this.state.newBucketListItem.picture} onChange={this.handleInput} placeholder="Picture" required/>
                <input style={styling.button} class="button is-primary" type="submit" value="New Bucket List Item" />
            </form>
        </div>
    )
}