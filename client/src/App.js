import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(users => console.log(users));
  }, []);

  return (
    <div className="App">
      <AppBar 
      position="static">
        <Toolbar>
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}>
          Video Analyzer
          </Typography>
        </Toolbar>
      </AppBar>
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
