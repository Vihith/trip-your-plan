import React from 'react'
import {Link} from 'react-router-dom'
import { DateRangePicker } from 'react-dates'
import moment from 'moment';
import 'react-dates/initialize';
import {connect} from 'react-redux'
import { startAddDestination, startShowDestination } from '../../actions/destinations';


class DestinationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: '',
            startDate: moment(),
            endDate: moment()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            startDate: this.state.startDate._d,
            endDate: this.state.endDate._d
        }
        console.log("formdata",formData)
        this.props.dispatch(startAddDestination(formData))
        this.props.history.push('/user/show')
    }
    

   
    


    render() {
        console.log('yyyy',this.props)
        return (
            <div className="row">
                <div className="col-md-6">Start Planning</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Destination
                    <input type="text" value={this.state.destination} onChange={this.handleChange} name="destination" />
                    </label><br />
                    <DateRangePicker
                        startDate={this.state.startDate} 
                        startDateId="your_unique_start_date_id" 
                        endDate={this.state.endDate} 
                        endDateId="your_unique_end_date_id" 
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                        focusedInput={this.state.focusedInput} 
                        onFocusChange={focusedInput => this.setState({ focusedInput })} 
                      /><br/>
                     <input type="submit" value='Add'/>
                </form>
            </div>
        )
    }
}

export default connect()(DestinationForm)