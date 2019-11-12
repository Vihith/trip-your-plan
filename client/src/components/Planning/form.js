import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment';
import 'react-dates/initialize';

import "./form.css"


class PlanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: '',
            destination: '',
            startDate: moment(),//.format('MMMM Do YYYY'),
            endDate: moment()//.format('MMMM Do YYYY')
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
            source: this.state.source,
            destination: this.state.destination,
            startDate: this.state.startDate._d,
            endDate: this.state.endDate._d
        }
        this.props.handleSubmit(formData)
    }


    render() {
        return (
            <div className="form-group row">
                <form onSubmit={this.handleSubmit} >
                        <label className="col-md-2 col-form-label" className="control-label"><b>Source</b>
                            <input type="text" value={this.state.source} className="form-control" onChange={this.handleChange} name="source" /></label><br/>
                        <label ><b>Destination</b>
                            <input type="text" value={this.state.destination} className="form-control" onChange={this.handleChange} name="destination" /></label>
                    <DateRangePicker 
                        startDate={this.state.startDate}
                        startDateId="your_unique_start_date_id"
                        startDatePlaceholderText="Start Date"
                        endDatePlaceholderText="End Date"
                        endDate={this.state.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                    /><br />
                    <input className="btn btn-dark" type="submit" value="Trip It!" style={{'marginTop': '4px'}}/>
                </form>
            </div>
        )
    }
}

export default PlanForm