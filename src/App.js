import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Booking from './components/appointment/Booking';
import AppointmentHistory from './components/appointment/AppointmentHistory';
import NotFound from './components/common/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/history" element={<AppointmentHistory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
