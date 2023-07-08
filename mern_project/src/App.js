import { React } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './views/login';
import Home from './views/home';
import New from './views/new';
import Register from './views/register';
import Show from './views/show';
import About from './views/about';
import Feed from './views/feed';
import './App.css'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/new",
        element: <New/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/destination/:id",
        element: <Show/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/destinations",
        element: <Feed/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
