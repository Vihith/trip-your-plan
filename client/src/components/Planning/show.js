import React from 'react'
import axios from 'axios';
import CheckList from '../list/addlist'

import { Link } from 'react-router-dom'

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3005/user/plans', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                const plans = response.data
                this.setState(() => ({ plans }))
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        console.log(this.state.plans)
        return (
            <div>
                <h2>Plan Show</h2>

                {this.state.plans.length && <p>Source: {this.state.plans[this.state.plans.length - 1].source}</p>}
                {this.state.plans.length && <p>Destination: {this.state.plans[this.state.plans.length - 1].destination}</p>}
                {this.state.plans.length && <p>Start Date: {this.state.plans[this.state.plans.length - 1].startDate}</p>}
                {this.state.plans.length && <p>End Date: {this.state.plans[this.state.plans.length - 1].endDate}</p>}
                <button><Link to="/user/plan">Back</Link></button>

                <CheckList />
            </div>
        )
    }
}

export default Show