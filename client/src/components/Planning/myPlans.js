import React from 'react'
// import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startMyPlans } from '../../actions/plans'
import _ from 'lodash'

class MyPlans extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         plans:[]
    //     }
    // }
    componentDidMount(){
        this.props.dispatch(startMyPlans())
        // axios.get('http://localhost:3005/user/plans',{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
        //     const plans=response.data
        //     this.setState({plans})
        // })
        // .catch(err =>{
        //     alert(err)
        // })
    }
    render(){
       console.log("sir" , this.props.plans)
      
        return(
            console.log("props is my plans", this.props),
            <div  className="background: #c2f0f6">
                <h2><b>My Plans</b></h2>
                {!_.isEmpty(this.props.plans)?(
                    <div>
                         <ul>
                    {this.props.plans.map(plan =>{
                        return <ul key={plan._id}>
                        <li><b>Source-</b>{plan.source}</li>
                        <li><b>Destination-</b>{plan.destination}</li> 
                       
                        <Link to={`/user/plan/${plan._id}`} className="btn btn-dark">View</Link>
                        <hr/>
                        </ul>
                       
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

const mapStateToProps = (state) => {
    return {
        plans : state.plans
    }
}
export default connect(mapStateToProps)(MyPlans)