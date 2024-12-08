import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import UserDetails from './component/UserDetails';
import Counter from './component/Counter';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        <h1 className="text-2xl font-bold">ZUSTAND STATE MANAGEMENT</h1>
        <nav className="space-x-4">
          <Link to="/counter" className="text-blue-500 hover:underline">Counter</Link>
          <Link to="/user-details" className="text-blue-500 hover:underline">User Details</Link>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
