
import './App.css'
import Navbaar from './component/Navbaar'
import Home from './component/Home'
import About from './component/About'
import Menu from './component/Menu'
import Products from './component/Products'
import Service from './component/Service'
import Contact from './component/Contact'
import Blog from './component/Blog'
import Footer from './component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbaar></Navbaar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/review' element={<Service></Service>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
