import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/landing/landingpage';
import AdminLogin from './components/admin/adminlogin';
import ProjectPage from './components/projects/projectpage';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={ <LandingPage/> }
          />
          <Route
            path="/admin/login"
            exact
            element={ <AdminLogin/> }
          />
          <Route
            path="/projects"
            exact
            element={ <ProjectPage/> }
          />
        </Routes>
    </div>
  );
}

export default App;
