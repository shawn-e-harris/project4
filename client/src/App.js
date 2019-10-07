import React from 'react';
import './App.css';
import UserFunctions from "./userFolder/UserFunctions"
import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserFunctions/>
        <BucketListItemFunctions/>
      </div>
    )
  }
}