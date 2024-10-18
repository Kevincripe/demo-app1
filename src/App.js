import './App.css';
import React, {useState} from 'react';


const App = () => {
	
	const [visible, setVisible] = useState(false)

	return (
	  <>
		<header>
			<h1>{ visible ? null : 'FCC ToDo' }</h1>
		</header>
	  </>
	);
  };

export default App;
