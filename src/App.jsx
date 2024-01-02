import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/:id' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
