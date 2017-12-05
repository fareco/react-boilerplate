import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import '../style/normalize.css';
import '../style/App.scss';
import Home from './Home';
import Counter from '../containers/Counter';
import Reddit from '../containers/Reddit';
import NoMatch from './NoMatch';


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Detail = ({ match, history }) => (
  <button onClick={history.goBack} >
    detail of {match.params.title}
  </button>
);

const Scroll = withRouter(ScrollToTop);

const App = () => (
  <Router>
    <Scroll>
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
          <Route path="/detail/:title" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Scroll>
  </Router>
);


export default App;
