import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


//Import Pages
import Login from './view/pages/Login/Login';
import PersonalData from './view/pages/PersonalData/PersonalData';
import ForgotPassword from './view/pages/ForgotPassword/ForgotPassword';
import MyStudies from './view/pages/MyStudies/MyStudies';
import Register from './view/pages/Register/Register';

import './App.css';

function App() {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [loadingText, setLoadingText] = useState('');
  // eslint-disable-next-line
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <BrowserRouter>
        <Switch>
          {/* @todo make a home component */}
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/personaldata" component={PersonalData} />
          <Route path="/mystudies" component={MyStudies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
