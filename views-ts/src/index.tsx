import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface Num{
  id: number
}
const num:Num={id:123}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App num={num}/>
  </React.StrictMode>
);


