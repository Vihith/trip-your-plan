import React from 'react'
import {Link} from 'react-router-dom'

function RecentPlans(props){
    return(
        <div className="card text-white bg-dark border-success  mb-2 col col-md-5" >
        <div className="card-body">
          <h5 className="card-title"><b>Source-</b>{props.Source}</h5>
          <h5 className="card-title"><b>Destination-</b>{props.Destination}</h5>
         
          <p className="card-text">{props.source}</p>
          <Link to={`/user/plan/${props.Id}`} className="card-link">View</Link>
          <Link to="/repeat" className="card-link">Repeat</Link>
        </div>
      </div>
    )
}
export default RecentPlans