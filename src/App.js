import React from 'react';
import Routes from './components/route'
import Header from './components/layer/header/header';
import Footer from './components/layer/footer/footer';
import './App.css'




function App() {
  return (
    
    <div id = "container">
      
      <Header />
      <Routes />
      <Footer />

    </div>
     
   
  );
}

export default App;
