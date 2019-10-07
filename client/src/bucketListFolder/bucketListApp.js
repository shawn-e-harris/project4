import React from "react"
import NewBucketListItemForm from "./NewBucketListItemForm"

// shows bucketListItemName as option for select tag and stores id as value
const bucketListItemPreview = (bucketListItem) => (
    <option value={bucketListItem.id}>{bucketListItem.bucketListItemName}</option>
)

// changes value of BucketListItemId to match BucketListItem selected
const bucketListItemList = (bucketListItems, currentBucketListItemId, onChange) => (
    <select value={currentBucketListItemId} onChange={(event) => onChange(event.target.value)}>
        {bucketListItems.map(bucketListItemPreview)}
    </select>
)

// changed to add bucketListItemNumber to match state in the App Component
const testBucketListItems =
{
    1:
    {
        id: 1,
        bucketListItemName: "Shawn",
        email: "Shawn@SoftwareEngineer.com",
    },
    7:
    {
        id: 7,
        bucketListItemName: "Asha",
        email: "Asha@UXDesigner.com",
        // issues: [
        //     { description: "a Joe test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
        //     { description: "a Joe test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" },
        //     { description: "a Joe test issue 3", id: 3, createdOn: "2019-09-29T15:05:18.180058Z" },
        // ]
    }
}

const getBucketListItemsFromServer = () =>
    fetch("/api/bucketlistitem/")
        .then(res => res.json())
            .then((bucketListItems) => objectFromListById(bucketListItems))

const saveBucketListItemToServer = (newBucketListItem) =>
    fetch('/api/bucketlistitem/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBucketListItem)
        }
    ).then(res => {
        console.log('saver bucketListItem to server response', res)
        res.json()
    })
        .catch((error) => {
            console.log(error)
        })

const objectFromListById = (bucketListItems) =>
    //convert from an array of bucketListItem objects to an
    //object of bucketListItem objects where the keys are bucketListItem ids
    bucketListItems.reduce((obj, bucketListItem) => {
        //get all issues belonging to the bucketListItem
        // bucketListItem.issues = issues.filter(issue => issue.bucketListItem === bucketListItem.id);
        obj[bucketListItem.id] = bucketListItem;
        return obj;
    }, {})

class BucketListItemApp extends React.Component {

    state = {
        currentBucketListItem: 1,
        bucketListItems: testBucketListItems
        // bucketListItems: []
    }

    componentDidMount = () => {
        getBucketListItemsFromServer()
            .then(bucketListItems => {
                this.setState({ bucketListItems })
            })
    }

    getNextBucketListItemId = () =>
        Math.max(...this.getAllBucketListItems().map(bucketListItem => bucketListItem.id)) + 1

    addNewBucketListItem = (newBucketListItemInfo) => {
        // console.log('newbucketListIteminfo', newBucketListItemInfo)
        saveBucketListItemToServer(newBucketListItemInfo)
            .then(newBucketListItem => {
                console.log(newBucketListItem)
                // newBucketListItem.issues = [];
                //newBucketListItem.id = this.getNextBucketListItemId();

                let bucketListItems = { ...this.state.bucketListItems }

                bucketListItems[newBucketListItem.id] = newBucketListItem;

                this.setState({ bucketListItems, currentBucketListItem: newBucketListItem.id });
            })
    }

    getCurrentBucketListItem = () =>
        // instead of calling {bucketListItemIssueList(this.state.bucketListItem[this.state.currentBucketListItem]) this helps to reduce redundancy
        // will also need to change .map in 
        this.state.bucketListItems[this.state.currentBucketListItem]


    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        Object.values(this.state.bucketListItems)


    setCurrentBucketListItem = (currentBucketListItem) => {
        this.setState({ currentBucketListItem })
    }

    render = () => (
        <div className='container'>
            <aside className='sidebar'>
                <NewBucketListItemForm addNewBucketListItem={this.addNewBucketListItem} />
            </aside>
            <article className='mainContent'>

                <div>
                    <h1>BucketListItems</h1>
                    {bucketListItemList(this.getAllBucketListItems(), this.state.currentBucketListItem, this.setCurrentBucketListItem)}
                </div>
            </article>
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE

export default BucketListItemApp;

// // displays on screen issue id and description on 
// const issuePreview = (issue) => (
//     <li>
//       {issue.id} - {issue.description}
//     </li>
//   )
  
//   // shows list of issues mapped as array
//   const issueList = (issues) => (
//     <ul>
//       {issues.map(issuePreview)}
//     </ul>
//   )
  
//   // display list of user's email and issues
//   const userIssueList = (user) => (
//     <div>
//       {user.email}
//       {issueList(user.issues)}
//     </div>
//   )

//   const issueDetails = (issue) => ( //() after => is for a function that only return JSX code, otherwise use {}
//   <div>
//     {issue.id} - {issue.description}
//     <button>
//       {issue.status ? "Close" : "Open"}
//     </button>
//   </div>
// )