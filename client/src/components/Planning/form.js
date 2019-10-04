import React from 'react'
import { DateRangePicker } from 'react-dates'
import moment from 'moment';
import 'react-dates/initialize';


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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"><b>Source</b></label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" value={this.state.source} onChange={this.handleChange} name="source" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-1 col-form-label"><b>Destination</b></label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" value={this.state.destination} onChange={this.handleChange} name="destination" />
                        </div>
                    </div>
                    <DateRangePicker 
                        startDate={this.state.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={this.state.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                    /><br />
                    <input className="btn btn-dark" type="submit" value="Trip It!" />
                </form>
            </div>
        )
    }
}

export default PlanForm