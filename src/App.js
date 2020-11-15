// import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './static/scss/app.scss'
import Header from './components/presentation/header';
import LandingPage from './components/presentation/landingPage'
import contact from './components/presentation/contact'
function App() {
  return (
    <div>
     <Header></Header>
     <BrowserRouter>
     <Switch>   
       <Route path="/contact" component={contact}></Route>    
          <Route path="/" component={LandingPage}></Route>
      </Switch>  
     </BrowserRouter>
    </div>
  );
}

export default App;
