import React from 'react'

const LoadingIcon = () => {
  return (
    <>
        <div class="loader"></div>
        <style>{`
            .loader {
                width: 16px;
                height: 16px;
                box-shadow: 0 30px, 0 -30px;
                border-radius: 4px;
                background: currentColor;
                display: block;
                margin: -50px auto 0;
                position: relative;
                color: #FFF;
                transform: translateY(30px);
                box-sizing: border-box;
                animation: animloader 2s ease infinite;
            }
            .loader::after,
            .loader::before {
                content: '';  
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                box-shadow: 0 30px, 0 -30px;
                border-radius: 4px;
                background: currentColor;
                color: #FFF;
                position: absolute;
                left: 30px;
                top: 0;
                animation: animloader 2s 0.2s ease infinite;
            }
            .loader::before {
                animation-delay: 0.4s;
                left: 60px;
            }
            
            @keyframes animloader {
                0% {
                top: 0;
                color: white;
                }
                50% {
                top: 30px;
                color: rgba(255, 255, 255, 0.2);
                }
                100% {
                top: 0;
                color: white;
                }
            }
          
        `}</style>
    </>
  )
}

export default LoadingIcon