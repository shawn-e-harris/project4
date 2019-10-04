import React from "react"

// display list of user's email and issues
const userIssueList = (user) => (
    <div>
      {user.email}
      {issueList(user.issues)}
    </div>
  )