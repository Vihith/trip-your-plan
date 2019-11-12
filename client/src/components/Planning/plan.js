import React from 'react'
import PlanForm from './form'
import { plan } from '../../actions/plans'
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from '../../config/axios'

class Plan extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     plans: {}
    //     // }
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    handleSubmit = (formData) => {
        axios.post('/user/plans', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.dispatch(plan(response.data))
                    if (!_.isEmpty(this.props.plans)) {
                        this.props.history.push(`/user/show`)
                    }
                }
            })
            .catch(err => {
                alert(err)
            })

        // this.props.dispatch(startPlan(formData))
        // if (!_.isEmpty(this.props.plans)) {
        //     this.props.history.push(`/user/show`)
        // }
    }

    render() {
        return (
            <div className="col-md-4 offset-4 ">
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