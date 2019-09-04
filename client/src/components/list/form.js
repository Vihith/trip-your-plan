import React from 'react'
//import axios from 'axios'
//import uuid from 'uuid'
import { startaddChecklist } from '../../actions/checklist'
import { connect } from 'react-redux'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap'

class CheckListForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(e) {
        const name = e.target.value
        this.setState({ name })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            // _id: uuid(),
            name: this.state.name
        }
        // axios.post('http://localhost:3005/user/checklists',formData,{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
        //     this.props.dispatch(addChecklist(formData))
        //  })
        this.props.dispatch(startaddChecklist(formData))
        this.setState({ name: '' })
    }
    render() {
        return (
            <div>
                <h2>Add Checklist</h2>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <div>
                        <CustomInput type='text' placeholder='enter title' value={this.state.name} onChange={this.handleChange} />
                        <CustomInput type='submit' />
                        
                    </div>
                </FormGroup>
                </form>


                
                    
                {/* <ol>
                    {this.props.checklist.map(checklists => <li key={checklists._id}>{checklists.name}
                        <button onClick={() => { this.props.dispatch(removeChecklist(checklists._id)) }}>remove</button></li>)}
                </ol> */}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        checklist: state.checklist
    }
}
export default connect(mapStateToProps)(CheckListForm)