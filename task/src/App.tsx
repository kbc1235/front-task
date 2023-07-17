import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signin from './components/Signin';

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
