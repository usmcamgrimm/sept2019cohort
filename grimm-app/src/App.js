import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ButtonProvider } from './ButtonContext';
import logo from './logo.svg'
import Button from './Button'
import './App.css'

{
  /* const navTabs = ['Home', 'About', 'Contact', 'Projects'] */
}

function App () {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/Projects'>
            <Projects />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Button></Button>
      </div>
    </Router>
  )
}

function Home () {
  return <h2>Home</h2>
}
function About () {
  return <h2>About</h2>
}
function Contact () {
  return <h2>Contact</h2>
}
function Projects () {
  return <h2>Projects</h2>
}

export default App
