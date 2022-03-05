import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Single from './pages/Single';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router className="App">
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/single/:id' element={<Single />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
