import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import KarticePregled from './pages/kartice/KarticePregled'
import KarticaNova from './pages/kartice/KarticaNova'
import KarticaPromjena from './pages/kartice/KarticaPromjena'
import Home from './pages/Home'

function App() {

  return (
    <Container>
      <Izbornik />
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route path={RouteNames.KARTICE} element={<KarticePregled />} />
        <Route path={RouteNames.KARTICE_NOVA} element={<KarticaNova />} />
        <Route path={RouteNames.KARTICE_PROMJENA} element={<KarticaPromjena />} />
      </Routes>
      <hr />
      &copy; Grafičke kartice sa AI podrškom | Robert Mlinarević
    </Container>
  )
}

export default App
