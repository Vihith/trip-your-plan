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
    }

    handleChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password

        }
        this.props.dispatch(startRegisterUser(formData))
        console.log("register problem", this.props)
        if(_.isEmpty(this.props.errors.message)){
            this.props.history.push('/login')
        }
        
     }

    render(){
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
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">FirstName  </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='First name' value={this.state.firstName} onChange={this.handleChange} name='firstName'/>
                    </div>
                    <label className="col-sm-1 col-form-label">LastName  </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='Last name' value={this.state.lastName} onChange={this.handleChange} name='firstName'/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Email  </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='Enter email' value={this.state.email} onChange={this.handleChange} name='firstName'/>
                    </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Password  </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='Password' value={this.state.password} onChange={this.handleChange} name='firstName'/>
                    </div>
                    </div>
                    <input type='submit' className="btn btn-primary" value='register' />
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