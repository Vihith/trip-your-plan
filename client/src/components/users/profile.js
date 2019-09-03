import React from 'react'
// import axios from 'axios'
import _ from 'lodash'
import { connect } from 'react-redux'
import {  startSetUser } from '../../actions/user'


class Profile extends React.Component {

    componentDidMount() {
        if (_.isEmpty(this.props.user)) {
            // axios.get('http://localhost:3005/user/profile', {
            //     headers: {
            //         'x-auth': localStorage.getItem('userAuth')
            //     }
            // })
            //     .then(response => {
            //         this.props.dispatch(setUser(response.data))
            //     })
            //     .catch(err => {
            //         this.props.history.push('/login')
            //     })
            this.props.dispatch(startSetUser())
        }
    }
    render() {
        return (
            <div>
                name-{`${this.props.user.firstName} ${this.props.user.lastName}`}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Profile)