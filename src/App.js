import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import Pages
import Login from './view/pages/Login/Login';
import PersonalData from './view/pages/PersonalData/PersonalData';
import Register from './view/pages/Register/Register';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Routes
  const routes = createBrowserRouter([
	{
		path: "/login",
		element: <Login />
	},
  {
    path: "/personaldata",
    element: <PersonalData />
  }
  ])

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
          console.log("Largura da tela atual: "+window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  });

  return (
    <div className='main-container'>
       {/* @todo adicionar o componente de loading */}
    	<RouterProvider router={routes} />
    </div>
  );
}

export default App;
