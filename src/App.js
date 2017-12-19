import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data/data';
import TypeaheadInput from './components/TypeaheadInput';
import InfoComponent from './components/InfoComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataFetched:false,
      citySelected:false,
      cityData:{}
    }
  }

  componentDidMount(){

  }

  onValueSelected = (selection)=>{
    if(selection.length > 0){
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selection[0].name + '&APPID=a82f0b5bc73b426cb7d669b06d2eea3c';
      axios.get(url)
        .then( (response) =>  {
            this.setState({...this.state,cityData: response.data,citySelected:true,dataFetched:true});
        })
    }else{
      this.setState({...this.state,citySelected:false,dataFetched:false});      
    }
    
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
          <div> 
              {this.state.cityData && this.state.cityData.weather &&
                  <div> <InfoComponent data = {this.state.cityData} citySelected={this.state.citySelected}/> </div>
              } 
          </div>
        </div>
          
          
        </div>
      </div>
    );
  }
}

export default App;
