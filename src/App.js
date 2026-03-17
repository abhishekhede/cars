import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './components/Cars';
import Details from './components/Details';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
