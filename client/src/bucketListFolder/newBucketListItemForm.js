// import React from "react"

// // this is the class component that will set the state of the BucketListItem component  
// export default class NewBucketListItemForm extends React.Component {
//     state = {
//         bucketListItemName: "",
//         email: ""
//     }

//     handleInput = (event) => {
//         let newBucketListItem = { ...this.state };
//         newBucketListItem[event.target.name] = event.target.value;
//         this.setState(newBucketListItem)
//     }
    

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // change this.state of bucketListItemName and email
//         this.props.addNewBucketListItem(this.state)
//         this.setState({ bucketListItemName: "", email: "" })
//     }

//     render = () => (
//         <form onSubmit={this.handleSubmit}>
//             <input type="text" name="bucketListItemName" value={this.state.bucketListItemName} onChange={this.handleInput} placeholder="BucketListItem Name" />
//             <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
//             <input type="submit" value="New BucketListItem" />
//         </form>
//     )
// }