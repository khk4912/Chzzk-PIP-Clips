import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending'
import Watch from './Watch'

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/watch/:id' element={<Watch />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
)

export default Router
