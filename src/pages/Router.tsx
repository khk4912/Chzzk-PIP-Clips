import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending'

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
    </Routes>
  </BrowserRouter>
)

export default Router
