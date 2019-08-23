import React from 'react'
import PlanForm from './form'
import axios from 'axios';

class Plan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('http://localhost:3005/user/plans', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {

                    this.props.history.push(`/user/show`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <PlanForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Plan