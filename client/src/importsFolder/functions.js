import React from "react"
import {Link} from 'react-router-dom'

let users = [];
let bucketListItems = [];
let user = {}
// this shows 1 user as option for select tag 
const userPreview = (user) => (
  <div>
  <Link to={`${user.id}`}>{user.userName} - {user.email} - {user.picture}</Link>
  </div>
)

const userList = (users, currentUserId, onChange) => (
  // <select value ={currentUserId} onChange={(evnt)=> onChange(evnt.target.value)}>
  <p value={currentUserId} onChange={(event) => onChange(event.target.value)}>
    {users.map(userPreview)}
  </p>
)

// displays bucketListItem id, and status
const bucketListItemPreview = (bucketListItem) => (
  <p>{bucketListItem.id} - {bucketListItem.bucketListName} 
  <button>{bucketListItem.status ? "Close" : "Open"}
</button> </p>
)

// displays array of bucketListItems
const bucketListItemList = (bucketListItems) => (
  <p>
    {bucketListItems.map(bucketListItemPreview)}
  </p>
)

// displays bucketListItem id, and status
const checkListItemPreview = (checkListItem) => (
  <li>{checkListItem.id} - {checkListItem.checkListItemName} - {checkListItem.status}</li>
)

// displays array of checkListItems
const checkListItemList = (checkListItems) => (
  <ul>
    {checkListItems.map(checkListItemPreview)}
  </ul>
)

const objectFromListById = (users, bucketListItems) =>
  //convert from an array of user objects to an
  //object of user objects where the keys are user ids
  users.reduce((obj, user) => {
    //get all bucketListItems belonging to the user
    user.bucketListItems = bucketListItems.filter(bucketListItem => bucketListItem.user === user.id);
    obj[user.id] = user;
    return obj;
  }, {})

export {
  bucketListItemList,
  bucketListItemPreview,
  checkListItemList,
  checkListItemPreview,
  objectFromListById,
  userList,
  userPreview,
  users,
  user,
  bucketListItems,
}