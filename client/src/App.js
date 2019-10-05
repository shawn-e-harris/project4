import React from 'react';
import './App.css';
import UserApp from "./userFolder/UserApp"
import BucketListItemApp from "./bucketListFolder/BucketListApp"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserApp />
        <BucketListItemApp />
      </div>
    )
  }
}