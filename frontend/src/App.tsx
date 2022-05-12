/* Import the relavent components */
import './App.css';
import { About } from './About';
import { NavBar } from './NavBar';
import { myNavItemsArr } from './NavBarItems';
import { Footer } from './Footer';
import { Login } from './LogIn';
import { Create } from './Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Shop } from './Shop'
import { MyFooterItemsArr } from './FooterItems';
import { Courses } from './Courses';
import { SignUp } from './Signup';
import { Donut } from './Donut';
import { Cup } from './Cup';
import { Plate } from './Plate';
import { Brasero } from './Bras';
import { Flask } from './Flsk';
import { Coffe } from './Coffe';
import { Clayplate } from './Clyplt';
import { Teapot } from './Tpot';
import { Bowl } from './Bwl';









/* Add the pages to the App */
function App() {
  return (
    <div className="App">

      <NavBar navItmsArr={myNavItemsArr} logoImg={"./logo.png"} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="courses" element={<Courses />} />
          <Route path="logIn" element={< Login />} />
          <Route path="donut" element={<Donut />} />
          <Route path="cup" element={<Cup />} />
          <Route path="plate" element={<Plate />} />
          <Route path="brasero" element={<Brasero />} />
          <Route path="flask" element={<Flask />} />
          <Route path="coffe" element={<Coffe />} />
          <Route path="clyplt" element={<Clayplate />} />
          <Route path="tpot" element={<Teapot />} />
          <Route path="bwl" element={<Bowl />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer FooterItemsArr={MyFooterItemsArr} />

    </div>
  );
}

export default App;








