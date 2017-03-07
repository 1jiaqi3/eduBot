import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Landing } from './views/landing';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Landing}/>
        </Route>
    </Router>
), document.getElementById('mainDiv'));