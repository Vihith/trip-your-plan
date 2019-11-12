import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { removeUser } from '../../actions/user'


function Logout(props) {
    if (!_.isEmpty(localStorage.getItem('userAuth'))) {
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
        props.history.push('/')
    }
    return (
        <div>
            <p>You have Succesfully logged out</p>
        </div>
    )
}
const mapStatetoProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStatetoProps)(Logout)