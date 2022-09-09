import './App.css';
import NavBar from './Components/Navbar'
import Automation from './pages/automation';
import Main from './pages/main';
import AutomationDetail from './pages/automationDetail';
import Search from './pages/search';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />

          {/**Routing to different pages within this webapp*/}
          <Routes>

            <Route path="/main" element={<AutomationDetail />} />

            <Route path="/automation" element={<Automation />} />

            <Route path="/" exact element={<Main />} />

          </Routes>

        </div>
    </Router>
  );
}

export default App;
