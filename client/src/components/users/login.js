import React from 'react'
import { loginUser } from '../../actions/user'
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from '../../config/axios'

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

        axios.post('/login', formData)
            .then(response => {
                if (response.data === 'invalid email/password') {
                    
                        alert('invalid email/password')
                    
                } else {
                localStorage.setItem('userAuth', response.data.token)  // ???? 
                this.props.dispatch(loginUser(response.data.userInfoForRedux))
                if (!_.isEmpty(localStorage.getItem('userAuth'))) {
                    this.props.history.push('/user/plan')
                }
                }
            })
            .catch(err => {
                console.log(err)
            })

        // this.props.dispatch(startLoginUser(formData))
        
        
        // this.setState({
        //     email: '',
        //     password: ''
        // })

    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row" >
                        <label className="col-sm-1 col-form-label"><b> Email </b></label>
                        <div className="col-sm-3">
                            <input type='email' className="form-control" placeholder='Enter email' value={this.state.email} onChange={this.handleChange} name='email' />
                        </div>
                    </div>
                    <div className="form-group row" >
                        <label className="col-sm-1 col-form-label"><b> Password </b></label>
                        <div className="col-sm-3">
                            <input type='password' className="form-control" placeholder='Password' value={this.state.password} onChange={this.handleChange} name='password' />
                        </div>
                    </div>
                    <input type='submit' className="btn btn-dark" value='login' style={{'margin-left' : '95px'}} />


                </form>
            </div>
        )
    }
}


export default connect()(Login)