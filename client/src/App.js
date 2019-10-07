import React from 'react';
import './App.css';
// import UserFunctions from "./userFolder/UserFunctions"
// import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"
// import CheckListItemFunctions from "./checkListFolder/CheckListItemFunctions"
import UserApp from "./userFolder/UserApp"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserApp/>
        {/* <UserFunctions/>
        <BucketListItemFunctions/>
        <CheckListItemFunctions/> */}
      </div>
    )
  }
}