import React from 'react';
import './App.css';
// import UserFunctions from "./userFolder/UserFunctions"
// import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"
// import CheckListItemFunctions from "./checkListFolder/CheckListItemFunctions"
import UserApp from "./userFolder/UserApp"
import BucketListItemApp from "./bucketListFolder/BucketListApp"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserApp/>
        <BucketListItemApp/>
        {/* <UserFunctions/> */}
        {/* <BucketListItemFunctions/>
        <CheckListItemFunctions/> */}
      </div>
    )
  }
}