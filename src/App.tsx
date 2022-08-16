import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import PlansPage from './pages/PlansPage/PlansPage';
import { AuthContext } from './contexts/AuthContext';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Header/>
        <Routes>
          <Route index element={isAuth ? <PurchasePage/> : <HomePage/>} />
          <Route path='/plans' element={isAuth ? <PlansPage/> : <HomePage/>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
