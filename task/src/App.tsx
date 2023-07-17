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
        <Route path='/' element={<Home/>} />
        <Route path='/Signin' element={<Signin/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
