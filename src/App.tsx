import { Route,Routes } from 'react-router-dom'
// import './App.css'
import Portfolio from './components/Portfolio'

function App() {
  

  return (
    <Routes>
          <Route path='/' element={<Portfolio/>} />

    </Routes>
  )
}

export default App
