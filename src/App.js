import './App.css';
import { useState } from 'react';

export const Homepage = ({title}) => {
	const [visible, setVisible] = useState(true);
	console.log(visible, 'visible')

  return (
    <div className="App">
		<br/>
		<button onClick={() => setVisible(!visible)}
			>Click Me</button>
      <h2>{visible ? title: null}</h2>
    </div>
  );
}
