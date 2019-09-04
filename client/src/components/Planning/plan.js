import React from 'react'
import PlanForm from './form'
import axios from 'axios';
import { startPlan } from '../../actions/plans'
import { connect } from 'react-redux'
import _ from 'lodash'

class Plan extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     plans: {}
    //     // }
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    handleSubmit = (formData) => {
        // axios.post('http://localhost:3005/user/plans', formData, {
        //     headers: {
        //         'x-auth': localStorage.getItem('userAuth')
        //     }
        // })
        //     .then(response => {
        //         if (response.data.hasOwnProperty('errors')) {
        //             alert(response.data.message)
        //         } else {

        //             this.props.history.push(`/user/show`)
        //         }
        //     })
        //     .catch(err => {
        //         alert(err)
        //     })

        this.props.dispatch(startPlan(formData))
        console.log("checking plan props", this.props)
        if (!_.isEmpty(this.props.plans)) {
            this.props.history.push(`/user/show`)
        }
    }

    render() {
        return (
            <div>
                <PlanForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plans
    }
}
export default connect(mapStateToProps)(Plan)