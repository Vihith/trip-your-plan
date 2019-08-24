import React from 'react'
// import axios from 'axios';
import { startLoginUser } from '../../actions/user'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errorMsg: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        // axios.post('http://localhost:3005/login', formData)
        //     .then(response => {
        //         if (response.data.hasOwnProperty('errors')) {
        //             this.setState({
        //                 errorMsg: response.data.errors
        //             })
        //         } else {
        //             console.log(response.data.token)
        //             localStorage.setItem('userAuth', response.data.token)
        //             this.props.dispatch(loginUser(response.data))
        //             this.props.history.push('/user/plan')
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        this.props.dispatch(startLoginUser(formData))
        this.props.history.push('/user/plan')

    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type='email' value={this.state.email} onChange={this.handleChange} name='email' />
                    </label><br />
                    <label>
                        Password
                        <input type='password' value={this.state.password} onChange={this.handleChange} name='password' />
                    </label><br />
                    <input type='submit' value='login' />
                </form>
            </div>
        )
    }
}


export default connect()(Login)