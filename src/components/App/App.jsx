// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import css from './App.module.css'
import About from '../../pages/About'
import UsersPages from '../../pages/UsersPage'
import NotFoundPage from '../../pages/NotFoundPage'


export default function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className={css.container}>
       <h1>DZ 5</h1>
       <AppHeader />

       <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<About />} />
        <Route path='/usersPages' element={<UsersPages />} />
        <Route path='*' element={<NotFoundPage />}/>
       </Routes> 




      </div>
      
  )
}

 
