import React from 'react'
import Axios from 'axios'

export default class SingleCL extends React.Component {
    state = {
        checkListItem: {},
    }

    getSingleCheckListItem = () =>
    Axios.get(`/api/checklistitem/${this.props.match.params.checkId}/`)
    .then(res => {
        this.setState({checkListItem: res.data})
    })

    getRelatedCheckListItems = () =>{

        //get all bucket list items
        Axios.get("/api/checklistitem/")
        .then(res => {
            this.setState({allCheckListItems: res.data})
        })
        
    }

    componentDidMount() {
        this.getSingleCheckListItem();
        this.getRelatedCheckListItems();
    }
    
    render() {
        return (
            <div>
                <p>{this.state.checkListItem.id} <br/>{this.state.checkListItem.checkListName} <br/> {this.state.checkListItem.status} </p> 
            </div>
        )
    }
}
//map through the bucklist state and display it here
