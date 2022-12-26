import './index.css'
import { MainLayout } from './components'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
