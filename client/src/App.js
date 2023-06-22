import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(users => console.log(users));
  }, []);

  return (
    <div className="App">
      <h1 className="title"> Video Analyzer</h1>
      <div className="video">
        <div className="videoboxes">
          <h3> Video 1</h3>
          </div>
        

      </div>
    </div>
  );
}

export default App;
