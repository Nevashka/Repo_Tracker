import React from 'react';
import { Header } from '../../Layout'
import { Search } from '../../components'

const Home = () => {

  return (
    <div>
      <Header />
      <div id='container'>
        <Search />
      </div>
    </div>
  )
};

export default Home;
