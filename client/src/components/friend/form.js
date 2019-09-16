import React from 'react'
import {startaddFriend } from '../../actions/friend';
import {connect} from 'react-redux'

class FriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:''
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
            name:this.state.name,
            email:this.state.email
        }
        
        this.props.dispatch(startaddFriend(formData))
        this.setState({
            name:'',
            email:''
        })
    }
    render(){
        return(
            <div>
                <h2>Add Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text' placeholder='enter name' value={this.state.name} onChange={this.handleChange} name='name' />
                    </label><br/>
                    <label>
                        Email
                        <input type='email' placeholder='enter email' value={this.state.email} onChange={this.handleChange} name='email'/>
                    </label><br/>
                    <input className="btn btn-primary"type='submit' />
                    
                </form>

            </div>
        )
    }
}
export default connect()(FriendForm)