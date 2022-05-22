import React from 'react'
import Collections from './Collections/Collections'
import Featured from './Featured/Featured'
import Landing from './Landing/Landing'
import Large1 from './Large/Large1'
import Large2 from './Large/Large2'


const Home = () => {
  return (
    <>
      <Landing/>
      <Featured/>
      <Collections/>
    </>
  )
}

export default Home