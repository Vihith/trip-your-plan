import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class MyPlanDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            plan:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3005/user/plans/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response =>{ 
                 const plan=response.data
                 this.setState({plan})
             })
             .catch(err =>{
                 alert(err)
             })
    }
    render(){
       
        return(
            <div>
                <h2>Details</h2>
                <ul>
                    <li>Source-{this.state.plan.source}</li>
                    <li>Destination-{this.state.plan.destination}</li>
                    <li>startDate-{this.state.plan.startDate}</li>
                    <li>enddate-{this.state.plan.endDate}</li>
                    {/* <li>friends-{this.state.plan.friend[0].name}</li> */}
                </ul>
                <button><Link to='/user/my-plans'>back</Link></button>

            </div>
        )
    }
}
export default MyPlanDetails