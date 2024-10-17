import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {Title} from './App';
import reportWebVitals from './reportWebVitals';

/*
index - button - homepage
title
*/

const Button = ({setVisible}) => {
  return (
    <button onClick={() => setVisible((prevVisible) => !prevVisible)}>
      Click Me
    </button>
  )
}

const Homepage = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      <br/>
      <Button setVisible={setVisible}/>
      <Title visible={visible} title={'This is a Recoil app'}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Homepage
    title="This is a Recoil App"
    />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
