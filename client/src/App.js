import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import RegistrationForm from './components/users/register'
import Login from './components/users/login'
import Profile from './components/users/profile'
import Logout from './components/users/logout'
import { connect } from 'react-redux'
import _ from 'lodash'

import TopNav from './navigation/topNav'
import Plan from './components/Planning/plan'
import Show from './components/Planning/show'
// import RoutePlan from './components/Planning/route'

function App(props) {
    console.log("app", props)
    return (
        <BrowserRouter>
            <div className="container">

                {
                    !_.isEmpty(props.user) ? (
                        <div>
                            <TopNav />
                        </div>
                    ) : (
                            <div>
                                <h2>Trip Your Plan</h2>

                                <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                        )
                }


                <Switch>
                    <Route path="/register" component={RegistrationForm} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/user/plan" component={Plan} exact={true} />
                    <Route path="/user/profile" component={Profile} exact={true} />
                    {/* <Route path="/user/route/:id" component={RoutePlan} exact={true}/> */}
                    <Route path="/user/show" component={Show} exact={true} />
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
