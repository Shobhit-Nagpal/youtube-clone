import './styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:q' element={<Search />}/>
          <Route path='/watch/:v' element={<Watch />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
