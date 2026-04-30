import { Link, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <header>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/about'>о нас</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакты</Link>
          </li>
        </ul>
      </header>

    <Routes>
      <Route path="/" element={<h1>Главная</h1>}/>
      <Route path="/about" element={<h1>о нас</h1>}/>
      <Route path="/contacts" element={<h1>контакты</h1>}/>
      <Route path="*" element={<h1>404</h1>}/>
    </Routes>
  </>
  )
}

export default App