import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import RegistrationForm from './components/users/register'

function App(props){
    return(
        <BrowserRouter>
            <div>
                <h2>Plan Your Trip</h2>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                <Route path="/register" />>
            </div>
        </BrowserRouter>
    )
}
export default App;
