import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/landing/landingpage';
import AdminLogin from './components/admin/adminlogin';

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
        </Routes>
    </div>
  );
}

export default App;
