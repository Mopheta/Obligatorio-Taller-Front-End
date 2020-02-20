import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Components  
import Login from './Components/login'
import RegisterNewUser from './Components/registerNewUser'
import Products from './Components/products'
import PageNotFound from './Components/PageNotFound'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route path="/login" component={ Login }  exact/>
        <Route path="/register" component={ RegisterNewUser }  exact/>
        <Route path="/products" component={ Products }  exact/>
        <Route component={ PageNotFound }/>
      </Switch>
      {/* <Login />
      <RegisterNewUser/>
      <Products/> */}
     
    </div>
  );
}

export default App;
