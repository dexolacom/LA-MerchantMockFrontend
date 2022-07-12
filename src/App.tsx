import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';


function App() {
  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <div className="App">
      <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>
      <Content isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged}/>
    </div>
  );
}

export default App;
