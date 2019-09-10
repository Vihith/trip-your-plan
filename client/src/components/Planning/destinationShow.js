import React from 'react'
import {connect} from 'react-redux'
import {startShowDestination} from '../../actions/destinations'

class DestinationShow extends React.Component{
    componentDidMount(){
        this.props.dispatch(startShowDestination())
        
    }
    render(){
        return(
            <div>
                {this.props.destinations.destination}

            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{
        destinations:state.destinations
    }
}
export default connect(mapStateToProps)(DestinationShow)