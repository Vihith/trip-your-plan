import React from 'react'
import axios from 'axios'


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
          axios.post('http://localhost:3005/register',formData)
             .then(response =>{
                 let errorMsg=response.data.hasOwnProperty('errors')? response.data.message :response.data.errmsg
                 if(errorMsg){
                     console.log(errorMsg)
                     this.setState({
                         errorMsg
                     })
                 }else{
                     this.setState({
                         successMsg:'successfully registered',
                         firstName:'',
                         lastName:'',
                         email:'',
                         password:'',
                         errorMsg:''
                     })
                 }
             })
             .catch(err =>{
                 console.log(err)
             })
    }

    render(){
        return(
            <div>
                <h2>Register Now</h2>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>}
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

export default RegistrationForm