import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import HomeScreen from './screens/HomeScreen'
import Header from './components/Header/Header'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateConfession from './components/Confessions/CreateConfession'
import Explore from './components/Explore/Explore'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header className='position-fixed' />
      <main className="py-3 text-white container-fluid">
          <Route path='/' exact component={HomeScreen} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/confess' component={CreateConfession} />
          <Route path='/explore' component={Explore} />
      </main>
    </Router>
  )
}

export default App
