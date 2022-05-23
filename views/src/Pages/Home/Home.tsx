import React from 'react'
import Categories from './Categories/Categories'
import Featured from './Featured/Featured'
import Landing from './Landing/Landing'


const Home = () => {
  return (
    <>
      <Landing/>
      <Categories/>      
      <Featured/>
    </>
  )
}

export default Home