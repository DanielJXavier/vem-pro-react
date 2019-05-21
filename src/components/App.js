// Core
import React from 'react';

// Styles
import './App.scss';

// Components
import Header from './Header'
import Logo from './Logo'
import Text from './Text'
import Link from './Link'

const App = () => (
  <div className="app">
    <Header>
      <Logo />
      <Text />
      <Link />
    </Header>
  </div>
);

export default App;
