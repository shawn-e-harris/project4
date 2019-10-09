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

const userList = (users) => (
  <p>
    {users.map(userPreview)}
  </p>
)

// displays bucketListItem id, and status
const bucketListItemPreview = (bucketListItem) => (
  <div>
  <Link to={`${bucketListItem.id}`}> {bucketListItem.bucketListName}</Link> 
  <button>{bucketListItem.status ? "Close" : "Open"}
</button> 
</div>
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

export {
  bucketListItemList,
  bucketListItemPreview,
  checkListItemList,
  checkListItemPreview,
  userList,
  userPreview,
  users,
  user,
  bucketListItems,
}