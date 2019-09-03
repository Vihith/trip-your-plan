import React from 'react'
import { startRegisterUser } from '../../actions/user';
import { connect } from 'react-redux'
import _ from 'lodash'

class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            errorMsg:'',
            successMsg:''

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password

        }
        this.props.dispatch(startRegisterUser(formData))
        if(!_.isEmpty(this.props.errors.message)){
            this.props.history.push('/login')
        }
        
     }

    render(){
        // console.log("render",this.props.errors.firstName)
        return(
            <div>
                <h2>Register Now</h2>
                {!_.isEmpty(this.props.errors) && (
                    <div>
                        <ul>
                            {Object.keys(this.props.errors).map(key => {
                                return <li key={key}>{key} {this.props.errors[key].message}</li>
                            })}
                        </ul>
                    </div>
                )}
                {/* {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>} */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        FirstName
                        <input type='text' value={this.state.firstName} onChange={this.handleChange} name='firstName'/>
                    </label><br/>
                    <label>
                        LastName
                        <input type='text' value={this.state.lastName} onChange={this.handleChange} name='lastName'/>
                    </label><br/>
                    <label>
                        Email
                        <input type='email' value={this.state.email} onChange={this.handleChange} name='email'/>
                    </label><br/>
                    <label>
                        Password
                        <input type='password' value={this.state.password} onChange={this.handleChange} name='password'/>
                    </label><br/>
                    <input type='submit' value='register' />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        errors : state.errors
    }
}
export default connect(mapStateToProps)(RegistrationForm)