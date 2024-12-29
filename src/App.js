import logo from './logo.svg';
import './App.css';
import "./all.min.css";



import Nav from './Header/Navbar';

import { Home } from './Home/Home';

import Proo from './Products/Product';

import { About } from './About/About';

import Menu from './Menu/Menu';

import People from './Team/Team';

import { Foot } from './Footer/Footer';

function App() {


  return (

    <div>
      <Nav />
      <Home />

      <Proo />

      <About />

      <Menu />
      <People />
      <Foot />
    </div>

  );
}

export default App;
