import React from 'react'
import { Modal, ModalFooter, ModalBody, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { startAddDestination } from '../../actions/destinations';

class PlanModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: '',
            modal: true
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggle() {
        this.props.history.push('/user/show')
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            destination: this.state.destination,
        }
        console.log("formdata", formData)
        this.props.dispatch(startAddDestination(formData))
        this.props.history.push('/user/show')
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered={true}>
                    {/* <ModalHeader toggle={this.toggle}>Add Destination</ModalHeader> */}
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Add Destination</h3>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-5">
                                    <input className="form-control" type="text" value={this.state.destination} onChange={this.handleChange} name="destination" />
                                </div>
                            </div>
                            <input className="btn btn-primary" type="submit" value='Add' />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect()(PlanModal)