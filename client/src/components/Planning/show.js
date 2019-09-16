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
import { Spinner } from 'reactstrap'

const showStyle = {
    color: 'red'
};
const background = {
    background: '#d8f8fc'
}
class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: [],
            loading: true
        }
    }
    componentDidMount() {
        this.props.dispatch(startShowPlan())
        this.setState({
            loading: false
        })
        

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
                <h2 style={showStyle}><b>Plan Show</b></h2>
                <div className="row row-md-4">
                    <div className="col col-md-4">
                        <ul style={background}>
                            {this.state.loading ? (
                                <div>
                                    <Spinner color="primary" />
                                </div>
                            ) : (
                                    <div>
                                        <li>{this.props.plans.length && <p><b>Source: </b>{this.props.plans[this.props.plans.length - 1].source}</p>} </li>{this.props.plans.length && <p><b>Start Date:</b> {this.props.plans[this.props.plans.length - 1].startDate}</p>}

                                        <li>{this.props.plans.length && <p><b>Destination:</b> {this.props.plans[this.props.plans.length - 1].destination}</p>} {this.props.plans.length && <p><b>End Date:</b> {this.props.plans[this.props.plans.length - 1].endDate}</p>}</li>

                                        {!_.isEmpty(this.props.destinations) ?
                                            (
                                                <div>

                                                    {this.props.destinations.map(destination => {
                                                        return <li key={destination._id}><b>Destination:</b>{destination.destination}</li>
                                                    })}

                                                </div>) :
                                            (
                                                <div></div>
                                            )

                                        }
                                    </div>
                                )}
                        </ul>
                    </div>
                    <div className="col col-md-3">
                        <CheckListForm />
                        <CheckList />
                    </div>
                    <div className="col col-md-4">
                        <FriendForm />
                        <Friend />
                    </div>
                    <Destinationshow />
                </div>
                <Link to='/user/destination' className="btn btn-info">+Add destination</Link><br />
                <Link to="/user/plan" className="btn btn-secondary">Back</Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans: state.plans,
        destinations: state.destinations
    }
}
export default connect(mapStateToProps)(Show)