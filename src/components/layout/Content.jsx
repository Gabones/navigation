import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/examples/About'

export default props =>
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    </main>