import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

export const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Switch>
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/About' exact> 
            <About />
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  )
}
