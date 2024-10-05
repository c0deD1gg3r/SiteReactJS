import './styles/css/main.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Project from "./Pages/Project";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='App'>

        <BrowserRouter>
          <Navbar />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
