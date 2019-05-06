import React from 'react';
import './App.css';

import Logo from './Logo'
import Text from './Text'
import Link from './Link'

const App = () => (
    <div className="App">
    <Header>
      <Logo repeat={6} />
        <Text />
        <Link />
    </Header>
    </div>
  );

export default App;
