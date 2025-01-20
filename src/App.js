import './index.css';
import React from 'react';
import Profile from './Components/profile';
import Content from './Components/content';
import useLocalStorage from 'use-local-storage';


function App() {
  const[isDark, setDarkTheme] = useLocalStorage('darkTheme', false);
  return (
    <>
    <Profile  isDark={isDark} setDarkTheme={setDarkTheme}/>
    <Content isDark={isDark}/>
    </>
  );
}

export default App;
