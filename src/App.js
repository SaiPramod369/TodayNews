import React from 'react'
import Navb from './Navb'
import India from './India'
import World from './World'
import Corona from './Corona'
import Home from './Home'
import { BrowserRouter,Route,Switch } from 'react-router-dom'


export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navb/>
     
      <Switch>
        <Route path="/india">
        <India />
        </Route>
        <Route path="/world">
          <World/>
        </Route>
        <Route path="/corona">
          <Corona/>
        </Route>
       <Route path="/">
       <Home/>
       </Route>

      </Switch>
      </BrowserRouter>
  
    </div>
  )
}

export default App;
