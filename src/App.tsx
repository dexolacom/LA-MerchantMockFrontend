import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import NftsPage from './pages/NftsPage/NftsPage';

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <div className="App">
      <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>

      <Routes>
        <Route index element={<PurchasePage isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>} />
        <Route path='/nfts' element={<NftsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
