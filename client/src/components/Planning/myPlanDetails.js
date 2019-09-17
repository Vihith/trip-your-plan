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
            console.log("show plans" , this.props.plans),
            <div>
                <h2>Details</h2>
                {this.state.loading?(
                    <div>
                         <Spinner color="primary" />
                    </div>

                ):(
                    <div>
                         <ul>
                    <li>Source-{this.state.plan.source}</li>
                    <li>Destination-{this.state.plan.destination}</li>
                    <li>startDate-{this.state.plan.startDate}</li>
                    <li>enddate-{this.state.plan.endDate}</li>
                    {/* <li>friends-{this.state.plan.friend[0].name}</li> */}
                </ul>
                    </div>

                )}
               
                {!_.isEmpty(this.state.plan) && (
                <Geocode  source={this.state.plan.source} destination={this.state.plan.destination}/>)}
                <button><Link to='/user/my-plans'>back</Link></button>
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