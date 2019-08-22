import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment';
import 'react-dates/initialize';
// import axios from 'axios';


class PlanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.isEdit ? props.plans.source : '',
            destination: props.isEdit ? props.destination : '',
            startDate: props.isEdit ? props.startDate : moment(),
            endDate: props.isEdit ? props.endDate : moment()
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
            endDate: this.state.endDate._d,
        }
        this.props.handleSubmit(formData)
    }


    render() {
        console.log("form plans source", this.state.source)
        return (
            <div className="row">
                <div className="col-md-6">Start Planning</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Source
                    <input type="text" value={this.state.source} onChange={this.handleChange} name="source" />
                    </label><br />
                    <label>Destination
                    <input type="text" value={this.state.destination} onChange={this.handleChange} name="destination" />
                    </label><br />
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                      /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default PlanForm