import './index.css';
import React from 'react';
import { Profile, Content } from './Components/profile';
import useLocalStorage from 'use-local-storage';


function App() {
  const[isDark, setDarkTheme] = useLocalStorage('darkTheme', true);
  return (
    <>
    <Profile  isDark={isDark} setDarkTheme={setDarkTheme}/>
    <Content isDark={isDark}/>
    </>
  );
}

export default App;
