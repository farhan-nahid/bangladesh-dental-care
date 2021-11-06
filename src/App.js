import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import AboutUs from './Pages/AboutUsPage/AboutUs/AboutUs';
import Appointment from './Pages/AppointmentPage/Appointment';
import Login from './Pages/AuthPage/Login/Login';
import PrivateRoute from './Pages/AuthPage/PrivateRoute/PrivateRoute';
import Register from './Pages/AuthPage/Register/Register';
import Doctors from './Pages/DoctorsPage/Doctors/Doctors';
import Home from './Pages/HomePage/Home/Home';
import Services from './Pages/HomePage/Services/Services';
import NotFound from './Pages/NotFoundPage/NotFound';
import ServiceDetail from './Pages/ServiceDetailPage/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/doctors' component={Doctors} />
          <Route path='/services' component={Services} />
          {/* <Route path='/details/:id' component={ServiceDetail} /> */}

          {/* <Route path='/details/:id'>
            <ServiceDetail />
          </Route> */}

          <PrivateRoute path='/details/:id'>
            <ServiceDetail />
          </PrivateRoute>

          <PrivateRoute path='/appointment'>
            <Appointment />
          </PrivateRoute>
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
