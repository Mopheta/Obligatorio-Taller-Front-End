import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components  
import Login from './Components/login'
import RegisterNewUser from './Components/registerNewUser'
import Products from './Components/products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Login />
      <RegisterNewUser/>
      <Products/>
    </div>
  );
}

export default App;
