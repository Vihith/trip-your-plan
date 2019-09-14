import React from 'react'
// import _ from 'lodash'
import { connect } from 'react-redux'
import { startEditUser } from '../../actions/user'
import { Link } from 'react-router-dom'

class EditProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData={
            firstName:this.state.firstName,
            lastName:this.state.lastName
        }
        console.log('formdata',formData)
        this.props.dispatch(startEditUser(formData))
        // axios.put('http://localhost:3005/user/profile/edit',formData,{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
            
        //     const body=response.data
        //     this.setState({
        //         firstName:body.firstName,
        //         lastName:body.lastName
        //     })
        // })
        this.props.history.push('/user/profile')
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        firstName
                        <input type='text' value={this.state.firstname} onChange={this.handleChange} name='firstName'/>
                    </label><br/>
                    <label>
                        lastName
                        <input type='text' value={this.state.lastName} onChange={this.handleChange} name='lastName'/>
                    </label><br/>
                    <input type='submit' /><span><button><Link to='/user/profile'>Cancel</Link></button></span>
                </form>
            </div>
        )
    }
}


export default connect()(EditProfile)