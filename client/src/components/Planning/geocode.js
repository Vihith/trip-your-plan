import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import _ from 'lodash'
// const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;
// const API_URL = `https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=true&maxResults=1&location=${this.props.source}&location=${this.props.destination}&key=${GEOCODE_API_KEY}`
 
class Geocode extends React.Component{
    constructor(props){
        super(props)
        this.state={
            maps:'',
            isLoading: true
        }
    }
    componentDidMount(){
        // const url = 'http://www.mapquestapi.com/geocoding/v1/batch?key=&location=Denver,CO&location=Boulder,CO'

        //axios.get(API_URL)

        axios.get(`https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=true&maxResults=1&location=${this.props.source}&location=${this.props.destination}&key=`)


        // axios.get(`http://www.mapquestapi.com/directions/v2/route?key=&from=${this.props.source}&to=${this.props.destination}`)
        
        
        // axios.get(`http://www.mapquestapi.com/geocoding/v1/batch?key=&location=${this.props.source}&location=${this.props.destination}`)  


        // axios.get(`http://www.mapquestapi.com/geocoding/v1/batch?key=&location=${this.props.source}&location=${this.props.destination}`)

        .then(response => {
            console.log("maps result",response.data)
            const maps = response.data
            this.setState({maps,isLoading: false})
        })
        .catch(err =>{
            alert(err)
        })

    //     window.onload= function(){
    //         L.mapquest.key = '';

    //     let map = L.mapquest.map('map', {
    //       center: [40.7128, -74.0059],
    //       layers: L.mapquest.tileLayer('map'),
    //       zoom: 13
    //     });

    //     L.mapquest.directions().route({
    //       start: 'bengaluru',
    //       end: 'Mysuru'
    //     });
    // }
    }

    
    render(){
        console.log("maps", this.props)
        return(
            <div>
                <h2>Maps</h2>
                {/* <div id="map" style="width: 100%; height: 530px;"></div> */}
                {/* <body style="border: 0; margin: 0;"> */}
                
                {this.state.isLoading ? (
                    <Spinner color ="primary" />
                ) :
                (<div>

                {this.state.maps && <img src= {this.state.maps.results[0].locations[0].mapUrl} alt="Map"/>}
                {this.state.maps && <img src= {this.state.maps.results[1].locations[0].mapUrl} alt="Map"/>}
                </div>
                )}
                <div>
                    {/* <Link type="text/css" rel="stylesheet" to="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
                    <div id="map" style={{width: '100%', height: '530px'}} /> */}


 
                </div>
            </div>    
        )
    }
}

export default Geocode