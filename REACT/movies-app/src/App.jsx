// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import WatchList from './components/WatchList'
import {Routes,Route} from 'react-router-dom';
import WatchListContextWrapper from './context/WatchListContext';
import Store from './redux/Store';
import {Provider} from 'react-redux';

function App() {

  return (
    <>
      <NavBar/>
      <Provider store={Store}>
      <WatchListContextWrapper>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/watchlist' element={<WatchList/>}></Route>
        </Routes>
      </WatchListContextWrapper>
      </Provider>
    </>
  )
}

export default App;
