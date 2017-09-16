import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Counter from '../containers/Counter'
import Reddit from '../containers/Reddit'
import NoMatch from './NoMatch'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/reddit">Reddit</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/reddit" component={Reddit} />
        <Route component={NoMatch} />
      </Switch> 
    </div>
  </Router>
)

export default App