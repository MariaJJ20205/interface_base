import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import '../src/Styles/global.css'
import Proyecto1 from './pages/proyecto1/Proyecto1';
import Proyecto2 from './pages/proyecto2/proyecto2';
import Proyecto3 from './pages/proyecto3/proyecto3';

function App() {
  return (
    <BrowserRouter>
      <div  >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}>
          
            <Route path='proyecto1' element={<Proyecto1 />}/>
            <Route path='proyecto2' element={<Proyecto2 />}/>
            <Route path='proyecto3' element={<Proyecto3 />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
