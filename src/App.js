import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contato from './components/pages/Contato';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
        <Container customClass="min-height">
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/projects' element={<Projects/>}></Route>
              <Route exact path='/company' element={<Company/>}></Route>
              <Route exact path='/contact' element={<Contato/>}></Route>
              <Route exact path='/newproject' element={<NewProject/>}></Route>
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;
