import { React } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './views/login';
import Home from './views/home';
import New from './views/new';
import Show from './views/show';
import About from './views/about';
import Feed from './views/feed';
import Footer from './components/Footer';
import './App.css'

const Layout = () => {
  return (
    <div className='body'>
      <Navbar />
      <div className='mainDiv'>
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/new",
        element: <New />
      },
      {
        path: "/post/:id",
        element: <Show />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/destinations",
        element: <Feed />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
