import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
