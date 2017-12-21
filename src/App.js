import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data/data';
import TypeaheadInput from './components/TypeaheadInput';
import InfoComponent from './components/InfoComponent';
import MapLocator from './components/MapLocator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataFetched:false,
      citySelected:false,
      cityData:{lat:28,lng:77},
      weatherInfo:{}
    }
  }

  componentDidMount(){

  }

  getWeatherdata = (lat,long)=>{
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +lat+'&lon=' + long + '&APPID=a82f0b5bc73b426cb7d669b06d2eea3c';
    axios.get(url)
      .then( (response) =>  {
          this.setState({...this.state,weatherInfo: response.data,citySelected:true,dataFetched:true});
      })
  }

  onValueSelected = (selection)=>{
    if(selection.length > 0){
      this.getWeatherdata(selection[0].coord.lat,selection[0].coord.lon);
      this.setState({...this.state,cityData:{lat:selection[0].coord.lat,lng:selection[0].coord.lon}})
    }else{
      this.setState({...this.state,citySelected:false,dataFetched:false});      
    }
  }

  onMapClick = (data)=>{
    console.log(data);
    this.getWeatherdata(data.latLng.lat(),data.latLng.lng());
    this.setState({...this.state,cityData:{lat:data.latLng.lat(),lng:data.latLng.lng()}})
  }

  handleMapMounted = (map)=>{
    this._map = map;
  }

  componentDidUpdate() {
    this._map.panTo({lat:this.state.cityData.lat, lng:this.state.cityData.lng});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weathereto</h1>
        </header>
        <div className="App-intro container">

        <div className='col-md-3'>
          <TypeaheadInput onValueSelected = {this.onValueSelected}/>
          <div className='map-locator'>
            <MapLocator 
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              onClick = {this.onMapClick}
              center={{lat:this.state.cityData.lat,lng:this.state.cityData.lng}}
              onMapMounted={this.handleMapMounted}
            />
          </div>
          
        </div>
        <div className='col-md-9'> 
              {this.state.weatherInfo && this.state.weatherInfo.weather &&
                  <div className='container'>  <InfoComponent data = {this.state.weatherInfo} citySelected={this.state.citySelected}/> </div>
              } 
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
