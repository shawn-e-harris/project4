// import React from "react"
// import NewCheckListItemForm from "./NewCheckListItemForm"

// // shows checkListItemName as option for select tag and stores id as value
// const checkListItemPreview = (checkListItem) => (
//     <option value={checkListItem.id}>{checkListItem.checkListItemName}</option>
// )

// // changes value of CheckListItemId to match CheckListItem selected
// const checkListItemList = (checkListItems, currentCheckListItemId, onChange) => (
//     <select value={currentCheckListItemId} onChange={(event) => onChange(event.target.value)}>
//         {checkListItems.map(checkListItemPreview)}
//     </select>
// )

// // changed to add checkListItemNumber to match state in the App Component
// const testCheckListItems =
// {
//     1:
//     {
//         id: 1,
//         checkListItemName: "Shawn",
//         email: "Shawn@SoftwareEngineer.com",
//     },
//     7:
//     {
//         id: 7,
//         checkListItemName: "Asha",
//         email: "Asha@UXDesigner.com",
//         // issues: [
//         //     { description: "a Joe test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
//         //     { description: "a Joe test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" },
//         //     { description: "a Joe test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" },
//         // ]
//     }
// }

// const getCheckListItemsFromServer = () =>
//     fetch("/api/checkListItem/")
//         .then(res => res.json())
//             .then((checkListItems) => objectFromListById(checkListItems))

// const saveCheckListItemToServer = (newCheckListItem) =>
//     fetch('/api/checkListItem/',
//         {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newCheckListItem)
//         }
//     ).then(res => {
//         console.log('saver checkListItem to server response', res)
//         res.json()
//     })
//         .catch((error) => {
//             console.log(error)
//         })

// const objectFromListById = (checkListItems) =>
//     //convert from an array of checkListItem objects to an
//     //object of checkListItem objects where the keys are checkListItem ids
//     checkListItems.reduce((obj, checkListItem) => {
//         //get all issues belonging to the checkListItem
//         // checkListItem.issues = issues.filter(issue => issue.checkListItem === checkListItem.id);
//         obj[checkListItem.id] = checkListItem;
//         return obj;
//     }, {})

// class CheckListItemApp extends React.Component {

//     state = {
//         currentCheckListItem: 1,
//         checkListItems: testCheckListItems
//         // checkListItems: []
//     }

//     componentDidMount = () => {
//         getCheckListItemsFromServer()
//             .then(checkListItems => {
//                 this.setState({ checkListItems })
//             })
//     }

//     getNextCheckListItemId = () =>
//         Math.max(...this.getAllCheckListItems().map(checkListItem => checkListItem.id)) + 1

//     addNewCheckListItem = (newCheckListItemInfo) => {
//         // console.log('newcheckListIteminfo', newCheckListItemInfo)
//         saveCheckListItemToServer(newCheckListItemInfo)
//             .then(newCheckListItem => {
//                 console.log(newCheckListItem)
//                 // newCheckListItem.issues = [];
//                 //newCheckListItem.id = this.getNextCheckListItemId();

//                 let checkListItems = { ...this.state.checkListItems }

//                 checkListItems[newCheckListItem.id] = newCheckListItem;

//                 this.setState({ checkListItems, currentCheckListItem: newCheckListItem.id });
//             })
//     }

//     getCurrentCheckListItem = () =>
//         // instead of calling {checkListItemIssueList(this.state.checkListItem[this.state.currentCheckListItem]) this helps to reduce redundancy
//         // will also need to change .map in 
//         this.state.checkListItems[this.state.currentCheckListItem]


//     getAllCheckListItems = () =>
//         // eliminates need for {checkListItemList(testCheckListItems)}
//         Object.values(this.state.checkListItems)


//     setCurrentCheckListItem = (currentCheckListItem) => {
//         this.setState({ currentCheckListItem })
//     }

//     render = () => (
//         <div className='container'>
//             <aside className='sidebar'>
//                 <NewCheckListItemForm addNewCheckListItem={this.addNewCheckListItem} />
//             </aside>
//             <article className='mainContent'>

//                 <div>
//                     <h1>CheckListItems</h1>
//                     {checkListItemList(this.getAllCheckListItems(), this.state.currentCheckListItem, this.setCurrentCheckListItem)}
//                 </div>
//             </article>
//         </div>
//     )
// }
// //  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE

// export default CheckListItemApp;