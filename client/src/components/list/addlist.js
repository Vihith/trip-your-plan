import React from 'react'
import uuid from 'uuid'
import { addChecklist, removeChecklist } from '../../actions/checklist'
import { connect } from 'react-redux'

class CheckList extends React.Component {
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
        const checklist = {
            _id: uuid(),
            name: this.state.name
        }
        this.props.dispatch(addChecklist(checklist))
        this.setState({ name: '' })
    }
    render() {
        return (
            <div>
                <h2>Add Checklist</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter name' value={this.state.name} onChange={this.handleChange} />
                    <input type='submit' />
                </form>
                <ol>
                    {this.props.checklist.map(checklists => <li key={checklists._id}>{checklists.name}
                        <button onClick={() => { this.props.dispatch(removeChecklist(checklists._id)) }}>remove</button></li>)}
                </ol>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        checklist: state.checklist
    }
}
export default connect(mapStateToProps)(CheckList)