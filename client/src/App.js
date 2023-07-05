import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(users => console.log(users));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar 
      position="static"
      sx={{
        marginBottom: "30px"
      }}
      >
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
      </div>
      
    </ThemeProvider>
  );
}

export default App;
