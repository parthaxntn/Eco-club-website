import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Nox from './pages/Nox/Nox';
import Gallery from './pages/Gallery/Gallery';
import Events from './pages/Events/Events.jsx';
import Blog from './pages/Blog/Blog';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogDetails from './pages/Blog/BlogDetails';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nox' element={<Nox />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/events' element={<Events />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetails />} />
          <Route path='/team' element={<Team />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;