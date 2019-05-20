// Core
import React from 'react';

// Styles
import './App.css';

// Components
import Header from './Header'
import Logo from './Logo'
import Text from './Text'
import Link from './Link'

const App = () => (
  <div className="App">
    <Header>
      <Logo />
      <Text />
      <Link />
    </Header>
  </div>
);

export default App;
