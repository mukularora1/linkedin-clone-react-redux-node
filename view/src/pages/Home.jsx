import React from 'react'
import SideBar from '../sideBar/SideBar'
import Feed from '../feedBody/Feed'
import RightSideWidget from '../rightSidewidget/RightSideWidget'
function Home() {
  return (
    <div className="app__body">
    <SideBar />
    <Feed />
    <RightSideWidget />
  </div>
  )
}

export default Home