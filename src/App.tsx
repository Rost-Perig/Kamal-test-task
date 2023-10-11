import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout } from 'Components/Layout';
import { Home } from 'views/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
