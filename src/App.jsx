import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './Experience'
import Home from './Home'
import { ThemeContext } from './Context'

function App() {
  const [theme,setTheme] = useState(0)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Home />
    <Experience />
    </ThemeContext.Provider>
    
  )
}

export default App
