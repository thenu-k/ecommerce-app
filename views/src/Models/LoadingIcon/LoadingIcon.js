import React from 'react'

const LoadingIcon = () => {
  return (
    <>
        <div class="loader">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
            <div class="item item-4"></div>
        </div>
        <style>{`
            .loader {
                margin-top: 30px;
                width: 100px;
                height: 100px;
                position: relative;
              }
              
              .item {
                width: 50px;
                height: 50px;
                position: absolute;
              }
              
              .item-1 {
                background-color:black;
                top: 0;
                left: 0;
                z-index: 1;
                animation: item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
              }
              
              .item-2 {
                background-color: rgb(238, 238, 238);
                top: 0;
                right: 0;
                animation: item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
              }
              
              .item-3 {
                background-color: black;
                bottom: 0;
                right: 0;
                z-index: 1;
                animation: item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
              }
              
              .item-4 {
                background-color: rgb(238, 238, 238);
                bottom: 0;
                left: 0;
                animation: item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
              }
              
              @keyframes item-1_move {
                0%, 100% {transform: translate(0, 0)} 
                25% {transform: translate(0, 50px)} 
                50% {transform: translate(50px, 50px)} 
                75% {transform: translate(50px, 0)} 
              }
              
              @keyframes item-2_move {
                0%, 100% {transform: translate(0, 0)} 
                25% {transform: translate(-50px, 0)} 
                50% {transform: translate(-50px, 50px)} 
                75% {transform: translate(0, 50px)} 
              }
              
              @keyframes item-3_move {
                0%, 100% {transform: translate(0, 0)} 
                25% {transform: translate(0, -50px)} 
                50% {transform: translate(-50px, -50px)} 
                75% {transform: translate(-50px, 0)} 
              }
              
              @keyframes item-4_move {
                0%, 100% {transform: translate(0, 0)} 
                25% {transform: translate(50px, 0)} 
                50% {transform: translate(50px, -50px)} 
                75% {transform: translate(0, -50px)} 
              }
          
        `}</style>
    </>
  )
}

export default LoadingIcon