import './App.css';

export const Title = ({title, visible}) => {

  return (
    <div className="App">
		<h2>{visible ? title: null}</h2>
    </div>
  );
}
