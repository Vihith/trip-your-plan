import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { connect } from 'react-redux'
import { setUser } from '../../actions/user'


class Account extends React.Component {

    componentDidMount() {
        if (_.isEmpty(this.props.user)) {
            axios.get('http://localhost:3005/user/account', {
                headers: {
                    'x-auth': localStorage.getItem('userAuth')
                }
            })
                .then(response => {
                    this.props.dispatch(setUser(response.data))
                })
                .catch(err => {
                    this.props.history.push('/login')
                })
        }
    }
    render() {
        console.log(this.props.user)
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
export default connect(mapStateToProps)(Account)