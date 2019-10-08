import React from 'react';
import {checkListItemList} from "../importsFolder/functions"

// test data for checkListItem
const testCheckListItem = [
    {id: 3, checkListItemName: "test checkListItem", status: "False"},
    {id: 6, checkListItemName: "test 2nd checkListItem", status: "True"}     
]

// render checkListItemList()
export default class CheckListItemFunctions extends React.Component {
    render() {
        return (
            <div>
                {checkListItemList(testCheckListItem)}
            </div>
        )
    }
}
