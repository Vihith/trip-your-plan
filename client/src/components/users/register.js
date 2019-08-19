import React from 'react'
import axios from 'axios'


class RegistrationForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3005/register', formData)
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                this.setState({
                    errorMsg: response.data.errorMsg
                })
            } else {
                this.setState({
                    successMsg: 'Successfully Register! Please Login',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    errorMsg: ''
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName"></input>
                    </label><br />
                    <label>Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName"></input>
                    </label><br />
                    <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email"></input>
                    </label><br />
                    <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password"></input>
                    </label><br />
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default RegistrationForm