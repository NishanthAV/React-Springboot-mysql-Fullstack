import { AppBar } from '@mui/material';

import './App.css';
import Student from './Components/Student.js';
import Appbar from './Components/Appbar';

function App() {
  return (
    <div className="App">
      
      <Appbar/>
      <Student/>
    </div>
  );
}

export default App;
