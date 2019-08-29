import React from 'react'
import {connect} from 'react-redux'
import { startremoveFriend, startsetFriend } from '../../actions/friend';


class Friend extends React.Component{
    componentDidMount(){
        // axios.get('http://localhost:3005/user/friends',{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
        //     this.props.dispatch(setFriend())
        // })
       
        this.props.dispatch(startsetFriend())
    }

    handleRemove=(id) =>{
       this.props.dispatch(startremoveFriend(id))
    }

    render(){
       
       
        return(
            
            <div>
               <ul>
                   {this.props.friends.map(friend =>{
                      return <li key={friend._id}>name-{friend.name},email-{friend.email}<button onClick={() =>{
                          const confirmRemove=window.confirm('Are You Sure?')
                          if(confirmRemove){
                              this.handleRemove(friend._id)
                          }
                      }}>remove</button></li>
                   })}
               </ul>
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    
    return{
        friends: state.friends
    }
}
export default connect(mapStateToProps)(Friend)