import './App.css'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { BrowserRouter as Router } from 'react-router-dom'

export default props =>
    <div className="App">
        <Router>
            <Menu/>
            <Content/>
        </Router>
    </div>