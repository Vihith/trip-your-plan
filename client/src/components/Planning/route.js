import React from 'react'

import PlanForm from './form';
import axios from 'axios';

class RoutePlan extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            plans : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log("props", this.props)
        axios.get(`http://localhost:3005/user/plans/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('userAuth') 
            }
        })
        .then(response => {
            const plans = response.data
            console.log("response", response.data)
            console.log(" route Plans", plans)
            this.setState({ plans })
        })
    }


    render(){
        console.log("route state", this.props.plans)
        return(
            
            <div>
                <h2>Show Route</h2>
                {
                    <PlanForm
                    plans ={this.state.plans}
                    isEdit ={true}
                    handleSubmit ={this.handleSubmit}
                     />
                }
            </div>
        )
    }
}

export default RoutePlan