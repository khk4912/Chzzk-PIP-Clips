import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default Router
