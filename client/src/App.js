import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import RegistrationForm from './components/users/register'
import Login from './components/users/login'
import Account from './components/users/account'
import Logout from './components/users/logout'
import { connect } from 'react-redux'
import _ from 'lodash'

function App(props) {
    return (
        <BrowserRouter>
            <div>

                {
                    !_.isEmpty(props.user) ? (
                        <div>
                            <li><Link to='/user/account'>Account</Link></li>
                            <li><Link to='/logout'>Logout</Link></li>
                        </div>
                    ) : (
                            <div>
                                <h2>Plan Your Trip</h2>

                                <ul>
                                    <li><Link to = "/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>

                                </ul>
                            </div>
                        )
                }


                <Switch>
                    <Route path="/register" component={RegistrationForm} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/user/account" component={Account} />
                    <Route path="/logout" component={Logout} />
                </Switch>

            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(App);
