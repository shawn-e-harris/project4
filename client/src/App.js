import React from 'react';
import './App.css';
import UserFunctions from "./userFolder/UserFunctions"
import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"
import CheckListItemFunctions from "./checkListFolder/CheckListItemFunctions"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserFunctions/>
        {/* <BucketListItemFunctions/>
        <CheckListItemFunctions/> */}
      </div>
    )
  }
}