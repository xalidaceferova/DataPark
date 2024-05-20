import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Career from './pages/Career'
import Detail from './pages/Detail'
import Addform from './pages/Addform'
import Navbar from './common/components/Navbar'
import Footer from './common/components/Footer'

function App() {


  return (
   <BrowserRouter>
  
   <Routes>
    <Route path='/' element={<Career />} />
    <Route path='/:id' element={<Detail />}/>
    <Route path='/addform' element={<Addform />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
