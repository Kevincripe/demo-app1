import './App.css';
import React, {useState} from 'react';
import { TodoMain } from './components/TodoMain';


const App = () => {
	
	const [visible, setVisible] = useState(false)

	return (
	  <>
		<header>
			<h1>{ visible ? null : 'FCC ToDo' }</h1>
		</header>
		<TodoMain />
	  </>
	);
  };

export default App;
