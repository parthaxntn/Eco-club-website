import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Nox from './pages/Nox/Nox';
import Gallery from './pages/Gallery/Gallery';
import Events from './pages/Events/Events';
import Blog from './pages/Blog/Blog';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home/>),
    },
    {
      path: "/nox",
      element: (<Nox/>),
    },
    {
      path: "/gallery",
      element: (<Gallery/>),
    },
    {
      path: "/events",
      element: (<Events/>),
    },
    {
      path: "/blog",
      element: (<Blog/>),
    },
    {
      path: "/team",
      element: (<Team/>),
    },
  ]);
  

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
