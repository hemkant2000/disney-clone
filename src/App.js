import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Detail from './components/Detail';
// import Login from './components/Login';
import Watch from './components/Watch';
import GoogleLogin from './components/GoogleLogin';
import GoogleSingup from './components/GoogleSingup';

import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
// import LoginMain from './components/LoginMain';;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  

} from "react-router-dom";



function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <UserAuthContextProvider>
          <Routes>

            <Route path="/" element={<Home />}>

              <Route path="login" element={<GoogleLogin />} />
              <Route path="singup" element={<GoogleSingup />} />

            </Route>



            <Route path="details" element={<Detail />} />

            <Route path="watch" element={<Watch />} />
            {/* <Route path="log" element={<LoginMain />} /> */}

          </Routes>
        </UserAuthContextProvider>
        <Footer />
      </div>
    </ Router >




  );
}

export default App;
