import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'
import _ from 'lodash'
import { Spinner } from 'reactstrap';
// import { connect } from 'react-redux'

// import {startPlanDetails} from '../../actions/plans'
import Geocode from './geocode'

class MyPlanDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            plan:{},
            loading:true
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        // this.props.dispatch(startPlanDetails(id))



        axios.get(`/user/plans/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response =>{ 
                 const plan=response.data
                 this.setState({plan, loading:false})
             })
             .catch(err =>{
                 alert(err)
             })
    }
    render(){
       
        return(
            <div>
                <h2>Details</h2>
                {this.state.loading?(
                    <div>
                         <Spinner color="primary" />
                    </div>

                ):(
                    <div>
                         <ul key={this.state.plan._id}>
                    <li><b>Source- </b>{this.state.plan.source}</li>
                    <li><b>Destination-</b>{this.state.plan.destination}</li>
                    <li><b>StartDate-</b>{this.state.plan.startDate}</li>
                    <li><b>Enddate-</b>{this.state.plan.endDate}</li>

                    {/* <li>friends-{this.state.plan.friend[0].name}</li> */}
                </ul>
                    </div>

                )}
               
                {!_.isEmpty(this.state.plan) && (
                <Geocode  source={this.state.plan.source} destination={this.state.plan.destination}/>)}
                <Link to='/user/my-plans' className="btn btn-dark">back</Link>
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         plans : state.plans.find(plan=>{plan._id == props.id})
//     }
// }
// export default connect(mapStateToProps)(MyPlanDetails)

export default MyPlanDetails