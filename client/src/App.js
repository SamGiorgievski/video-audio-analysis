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

          <div className="videoplayer1">
            <header className="App-header">
            <video controls muted>
                <source src="http://localhost:4000/video" type="video/mp4"></source>
            </video>
            </header>
          </div>

          </div>
        
          <div className="videoboxes">
          <h3> Video 2</h3>
          </div>

          <div className="videoboxes">
          <h3> Video 2</h3>
          </div>

      </div>
    </div>
  );
}

export default App;
