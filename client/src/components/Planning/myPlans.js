import React from 'react'
// import axios from 'axios';
import { connect } from 'react-redux'
import { startMyPlans } from '../../actions/plans'
import _ from 'lodash'
import RecentPlans from './recentPlans'

const style={
    background : "#c2f0f6"
}

class MyPlans extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //plans:[]
            loading:true
         }
 }
    componentDidMount(){
        this.props.dispatch(startMyPlans())
        // axios.get('http://localhost:3005/user/plans',{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
        //     const plans=response.data
        //     this.setState({plans})
        // })
        // .catch(err =>{
        //     alert(err)
        // })
    }
    render(){
      
        return(
            <div>
                <h2><b>My Plans</b></h2>
                {!_.isEmpty(this.props.plans)?(
                    <div style={style}>
                        
                {this.props.plans.map(plan =>{
                    return <RecentPlans key={plan._id}
                    Source={plan.source}
                    Destination={plan.destination}
                    Id= {plan._id}
                    />
                })}

                    

                        
                    </div>
                ):(
                    <div>
                        <b>No plans yet......start planning</b>
                    </div>
                )}

          
               

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plans : state.plans
    }
}
export default connect(mapStateToProps)(MyPlans)