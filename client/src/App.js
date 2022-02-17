
import './App.css';
import ViewData from './Pages/ViewData';

import Signup from './Pages/Signup'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/form-data" element={<ViewData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
