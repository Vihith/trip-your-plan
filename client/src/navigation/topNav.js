import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

function TopNav(props) {
    return (
        <div>
            {
                 !_.isEmpty(localStorage.getItem('userAuth')) ?(
                     <div>
                         <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">

<Link className="navbar-brand" to="/user/plan"><button type="button" className="btn btn-primary btn-lg">Trip Your Plan</button></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="/user/plan"><button type="button" className="btn btn-outline-dark">
            Home </button><span className="sr-only">(current)</span></Link>
    
        </li>

        <nav className="navbar-nav"><Link className="nav-link" to="/user/my-plans"><button type="button" className="btn btn-outline-dark">
        My Plans
</button></Link></nav>

        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
                    </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/user/profile">Profile</Link>
                {/* <Link className="dropdown-item" to="/user/my-plans">My Plans</Link> */}
                <Link className="dropdown-item" to="/logout">Logout</Link>

            </div>
        </li>
    </ul>
</div>
</nav>

                     </div>
                 ):(
                     <div>
                          <h2>Trip Your Plan</h2>
                               
                                        <ul>
                                               {/* <Login /> */}
                                           <li><Link to="/login">Login</Link></li>
                                           <li><Link to="/register">Register</Link></li>
                                        </ul>

                     </div>
                 )
            }
        
        </div>
    )
}

const mapStateToProps=(state) =>{
    return{
        plans:state.plans
    }
}
export default connect(mapStateToProps)(TopNav)