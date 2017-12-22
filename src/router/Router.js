import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import Home from './../pages/Home/index'
import Login from './../pages/Login/index'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li><Link to="/">index</Link></li>
                        <li><Link to="/login">login</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default App;