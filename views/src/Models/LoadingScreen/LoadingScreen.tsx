import React from 'react'

const LoadingScreen = () => {
  return (
    <>
        <section className="loadingscreen container outer">
            <h1>GENESIS</h1>
        </section>

        <style>{`
        section.loadingscreen{
            height: 100vh; width: 100%;
            display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        
        section.loadingscreen h1{
            font-size: 70px;
            font-weight: 500;
            height: 100px;
            display: flex; justify-content: center; align-items: center;
        }
        @media all and (max-width: 500px){
            section.loadingscreen h1{
                font-size: 50px;
            }
        }

        `}</style>
    </>
  )
}

export default LoadingScreen