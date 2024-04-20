import * as React from 'react'
import {Route, Routes} from 'react-router-dom'
import Basic from './components/navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

import '../App.scss';





function App() {


  

  return (
    <>
     <Basic/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
     </Routes>
      
    </>
  )
}

export default App
