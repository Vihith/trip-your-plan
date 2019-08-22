import React from 'react'

import Show from './show'
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
        axios.get(`http://localhost:3005/user/plans/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('userAuth') 
            }
        })
        .then(response => {
            const plans = response.data
            this.setState({ plans })
        })
    }


    render(){
        return(
            
            <div>
                <h2>Show Route</h2>
                {
                    <Show
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