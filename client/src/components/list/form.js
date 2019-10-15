import React from 'react'
import { startaddChecklist } from '../../actions/checklist'
import { connect } from 'react-redux'
import { CustomInput, FormGroup } from 'reactstrap'
import CheckList from './checklist'
import { Modal, ModalFooter, ModalBody, Button } from 'reactstrap'

class CheckListForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            modal:true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.props.history.push('/user/show')
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
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered={true}>
                <ModalBody>
                <h2>Add Checklist</h2>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <div>
                        <CustomInput type='text' placeholder='enter title' value={this.state.name} onChange={this.handleChange} />
                        <CustomInput className="btn btn-info"type='submit' />
                        
                    </div>
                </FormGroup>
                <CheckList/>
               
                </form>
                </ModalBody>
                <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>


                
                    
                {/* <ol>
                    {this.props.checklist.map(checklists => <li key={checklists._id}>{checklists.name}
                        <button onClick={() => { this.props.dispatch(removeChecklist(checklists._id)) }}>remove</button></li>)}
                </ol> */}
                
                </Modal>

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