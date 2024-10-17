import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Title from './components/Title';


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

export default Homepage;
