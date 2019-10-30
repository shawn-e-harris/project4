import React from "react"
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

let users = [];
let bucketListItems = [];
let user = {}
// this shows 1 user as option for select tag 

const styling = {
  UImage: {
    height: "75px",
  },
  userCard: {
    width: "300px",
    height: "125px",
    margin: "30px 35px 30px 35px",
    borderRadius: "5pt"
  },
  BLImage: {
    height: "200px",
  },
  BLCard: {
    width: "250px",
    height: "275px",
    border: "solid black",
    margin: "30px 75px 30px 75px",
    borderRadius: "5pt"
  },
  BLName: {
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    color: "black"
  },
  CLCard: {
    width: "300px",
    height: "50px",
    margin: "30px 40px ",
    borderRadius: "5pt"
  }
}

const userPreview = (user) => (
  <div class="card is-grouped-centered"
    // User Card styling
    style={styling.userCard}>
    <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img style={styling.UImage} src={user.picture} alt="Profile Image" />
            </figure>
          </div>
          <div class="media-content">
            <Link to={`/user/${user.id}/`}>{user.userName}</Link>
            <p class="subtitle is-6">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
)
const userList = (users) => (
  <p class="containers">
    {users.map(userPreview)}
  </p>
)

// displays bucketListItem id, and status
const bucketListItemPreview = (bucketListItem) => (
  <div class="columns">

    <div class="card"
      style={styling.BLCard}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img style={styling.BLImage} src={bucketListItem.picture} alt="Profile Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <Link style={styling.BLName} to={`/bucketlistitem/${bucketListItem.id}/`}>{bucketListItem.bucketListName}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// displays array of bucketListItems
const bucketListItemList = (bucketListItems) => (
  <p class="containers">
    {bucketListItems.map(bucketListItemPreview)}
  </p>
)

// displays bucketListItem id, and status
const checkListItemPreview = (checkListItem) => (
  <div class="card"
    style={styling.CLCard}>
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p>{checkListItem.checkListName}</p>
          {/* <input class="radio" type="radio" name="status" value={checkListItem.status} /> */}
            {/* Complete */}
        </div>
      </div>
    </div>
  </div>
)

// displays array of checkListItems
const checkListItemList = (checkListItems) => (
  <ul class="containers">
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