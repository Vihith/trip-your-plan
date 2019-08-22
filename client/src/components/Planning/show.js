import React from 'react'
import axios from 'axios';

class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={
            plans: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3005/user/plans',{
            headers : {
                'x-auth' : localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            const plans = response.data
            this.setState(()=>({ plans }))
        })
        .catch(err => {
            alert(err)
        })
    }

    render(){
        console.log(this.state.plans)
        return(
            <div>
                <h2>Plan Show</h2>
                {this.state.plans.length && <p>Source: {this.state.plans[0].source}</p> }
                {this.state.plans.length && <p>Destination: {this.state.plans[0].destination}</p> }
                {this.state.plans.length && <p>Start Date: {this.state.plans[0].startDate}</p> }
                {this.state.plans.length && <p>End Date: {this.state.plans[0].endDate}</p> }
            </div>
        )
    }
}

export default Show