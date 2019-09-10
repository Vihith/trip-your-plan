import React from 'react'
import axios from 'axios'
 
class Geocode extends React.Component{
    constructor(props){
        super(props)
        this.state={
            maps:''
        }
    }
    componentDidMount(){
        // const url = 'http://www.mapquestapi.com/geocoding/v1/batch?key=&location=Denver,CO&location=Boulder,CO'

        axios.get(`https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=true&maxResults=1&location=${this.props.source}&location=${this.props.destination}&key=`)


        // axios.get(`http://www.mapquestapi.com/directions/v2/route?key=&from=${this.props.source}&to=${this.props.destination}`)
        
        
        // axios.get(`http://www.mapquestapi.com/geocoding/v1/batch?key=&location=${this.props.source}&location=${this.props.destination}`)  


        // axios.get(`http://www.mapquestapi.com/geocoding/v1/batch?key=&location=${this.props.source}&location=${this.props.destination}`)

        .then(response => {
            console.log("maps result",response.data)
            const maps = response.data
            this.setState({maps})
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
        console.log("maps", this.props)
        return(
            <div>
                <h2>Maps</h2>
                {this .state.maps && <img src= {this.state.maps.results[0].locations[0].mapUrl}/>}
                {this .state.maps && <img src= {this.state.maps.results[1].locations[0].mapUrl}/>}

            </div>
        )
    }
}

export default Geocode