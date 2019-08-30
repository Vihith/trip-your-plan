import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import _ from 'lodash'

class MyPlans extends React.Component{
    constructor(props){
        super(props)
        this.state={
            plans:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3005/user/plans',{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            const plans=response.data
            this.setState({plans})
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
       
      
        return(
            <div>
                <h2>My Plans</h2>
                {!_.isEmpty(this.state.plans)?(
                    <div>
                         <ul>
                    {this.state.plans.map(plan =>{
                        return <ol key={plan._id}>
                        <li>source-{plan.source}</li>
                        <li>destination-{plan.destination}</li> 
                       
                        <button><Link to={`/user/plan/${plan._id}`}>View</Link></button>
                        </ol>
                       
                    })}
                </ul>
                        
                    </div>
                ):(
                    <div>
                        <p>No plans yet......start planning</p>
                    </div>
                )}
               

            </div>
        )
    }
}

export default MyPlans