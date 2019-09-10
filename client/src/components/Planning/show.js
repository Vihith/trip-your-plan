import React from 'react'
import _ from 'lodash'
import CheckListForm from '../list/form'
import CheckList from '../list/checklist'
import FriendForm from '../friend/form'
import Friend from '../friend/friendlist'
import Destinationshow from './destinationShow'

import { Link } from 'react-router-dom'

import { startShowPlan } from '../../actions/plans'
import { connect } from 'react-redux';



class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: []
        }
    }
    componentDidMount() {
        this.props.dispatch(startShowPlan())
       
        // axios.get('http://localhost:3005/user/plans', {
        //     headers: {
        //         'x-auth': localStorage.getItem('userAuth')
        //     }
        // })
        //     .then(response => {
        //         const plans = response.data
        //         this.setState(() => ({ plans }))
        //     })
        //     .catch(err => {
        //         alert(err)
        //     })
    }

    render() {
        return (
            <div>
                <h2>Plan Show</h2>
                
            <ul>
                <li>{this.props.plans.length && <p>Source: {this.props.plans[this.props.plans.length - 1].source}</p> } {this.props.plans.length && <p>Start Date: {this.props.plans[this.props.plans.length - 1].startDate}</p>}</li>
                <li>{this.props.plans.length && <p>Destination: {this.props.plans[this.props.plans.length - 1].destination}</p>} {this.props.plans.length && <p>End Date: {this.props.plans[this.props.plans.length - 1].endDate}</p>}</li>
                {!_.isEmpty(this.props.destinations)?
                    (
                    <div>
                        
                       {this.props.destinations.map(destination =>{
                           return<li key={destination._id}>Destination:{destination.destination}</li>
                       })}
                       
                    </div>):
                    (
                        <div></div>
                    )
                    
                    }
                
               </ul>  
                
                
                <Link to='/user/destination'>+Add destination</Link><br/>
                <button><Link to="/user/plan">Back</Link></button>

                <CheckListForm />
                <CheckList/>
                <FriendForm/>
                <Friend/>
                <Destinationshow/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans:state.plans,
        destinations : state.destinations
    }
}
export default connect(mapStateToProps)(Show)