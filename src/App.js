import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './view/pages/Login/Login';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Routes
  const loginRoute = createBrowserRouter([
	{
		path: "/login",
		element: <Login />
	}
  ])

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  });

  return (
    <div className='main-container'>
       {/* @todo adicionar o componente de loading */}
    	<RouterProvider router={loginRoute} />
    </div>
  );
}

export default App;
