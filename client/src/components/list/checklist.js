import React from 'react'

import { connect } from 'react-redux'
import { startsetChecklist } from '../../actions/checklist'
import { CustomInput, FormGroup } from 'reactstrap'

class CheckList extends React.Component {

    componentDidMount() {

        // axios.get('http://localhost:3005/user/checklists', {
        //     headers: {
        //         'x-auth': localStorage.getItem('userAuth')
        //     }
        // })
        //     .then(response => {
        //         this.props.dispatch(setChecklist(response.data))
        //         console.log(response.data)
        //     })
        this.props.dispatch(startsetChecklist())
    }




    // handleRemove = (id) => {
    //     this.props.dispatch(startremoveChecklist(id))
    // }

    // handleCheck = (id) => { 
    
    //     console.log("checklist ID",id)

    //     axios.put(`http://localhost:3005/user/checklist/${id}`,{
    //         headers: {
    //             'x-auth' : localStorage.getItem('userAuth')
    //         }
    //     })

    // }


    render() {
        return (
            <div>
                <FormGroup>
                    <ul>
                        {this.props.checklists.map(checklist => {
                            return <li key={checklist._id}><label><CustomInput  type="checkbox" id={checklist._id} label={checklist.name} /></label></li>

                            // onClick={this.handleCheck(checklist._id)}

                            // return <li key={checklist._id}><button onClick={() => {
                            //     const confirmRemove = window.confirm('Are you sure?')
                            //     if (confirmRemove) {
                            //        this.handleRemove(checklist._id)
                            //     }
                            // }}>remove</button></li>
                        })}
                    </ul>
                </FormGroup>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        checklists: state.checklists
    }
}
export default connect(mapStateToProps)(CheckList) 