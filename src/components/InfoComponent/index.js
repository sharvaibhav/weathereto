import React, { Component } from 'react';
import {data} from '../../data/data';
import {Typeahead} from 'react-bootstrap-typeahead'; 


class InfoComponent extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

  }



  render() {
    
    return (
      <div className="info-component">
        <div className='col-md-12'>
        {this.props.citySelected && 
          <div className='heading text-left'>
           <h2> The Weather Conditions at {this.props.data.name}  is {this.props.data.weather[0].description}. </h2>
           <p> Timestamp for this information is <b>{new Date(this.props.data.dt).toDateString()} </b></p>
           <p> Current Temp at {this.props.data.name}  <b>{Math.round(Math.abs(this.props.data.main.temp-273))} degree Celcius. </b></p>
           <p> Current Preasure at {this.props.data.name}  <b>{Math.round(this.props.data.main.pressure)} mbar. </b></p>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default InfoComponent;
