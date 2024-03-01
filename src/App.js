import Landing from './components/Layout/Landing';
import PageTemplate from './components/Layout/sideNavbar';
import Buy from './components/Layout/Buy';
import Profile from './components/Layout/Profile';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="app">    
      <Router>
      <PageTemplate />
        <Routes>
          <Route exact path="/" element={<Landing></Landing>}></Route>
          <Route exact path="/buy" element={<Buy></Buy>}></Route>
          <Route exact path="/profile" element={<Profile></Profile>}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
