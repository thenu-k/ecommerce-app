import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
//Redux
import {useDispatch, useSelector} from 'react-redux'; import { setScreenType } from '../StateManager/mainSlice';
//Components
import Footer from '../Common/Footer/Footer.js';import Header from '../Common/Header/Header.js';import MobileHeader from '../Common/MobileHeader/MobileHeader.js'

const Layout = () => {

  //Redux states
  const {isMobile} = useSelector((state)=>state.isMobile)
  const dispatch = useDispatch()
  console.log("Inside component===========")
  // console.log(isMobile)
  // document.addEventListener('click', ()=> console.log("Yo"))
  
  // window.addEventListener('click', yo)
  // useEffect(()=>{ dispatch(setScreenType(true)) ;}, [])
  // useState(()=>{})

  // function yo(){
  //   console.log(yo)
  // }
  //window.addEventListener('resize',()=>{console.log("Inside event listener");console.log(count); checkMobile(isMobile)})     ///There's our problem! isMobile doesn't exist inside of the event listener

  //Screen Size
  // function checkMobile(isMobile){
  //   console.log("Called component function")
  //   console.log(isMobile)
  //   let windowWidth = window.innerWidth
  //   if(windowWidth<700 && isMobile!=true){dispatch(setScreenType(true))}
  //   if(windowWidth>700 && isMobile!=false){console.log("Dispatch sent");dispatch(setScreenType(false))}
  // }

  // useEffect(()=>{console.log("Inside useEffect");},[])
  //useEffect(()=>{console.log("Inside initial useEffect");   window.addEventListener('click', ()=> console.log(isMobile));dispatch(setScreenType(false)) })   //Only on the first render.
  //useEffect(()=>{console.log("Inside latter useEffect"); window.addEventListener('resize',()=>{console.log("Inside event listener");console.log(isMobile); })})     //We don't need to add dependecies as checkMobile will auto re-render the component 

  const [count, setCount] = useState(0)
  console.log("Actual count: "+count)
  window.addEventListener('click', ()=> console.log('event listener: '+ count))
  
  return (
    // <>
    //   {
    //     isMobile 
    //       ?    <MobileHeader/>
    //       :    <Header isMobile={isMobile}/>
    //   }
    //   <div style={{ height: '65px'}}></div> {/*Padding Element*/}
    //   <Outlet/>
    //   <Footer/>
    // </>
    <button onClick={()=>{if(count===0){setCount(1)}else{setCount(0)}}}>Click me</button>
  )
}


export default Layout


//Eureka! redux states cannot be called up inside useEffect!!!