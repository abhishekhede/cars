import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './components/Cars';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
