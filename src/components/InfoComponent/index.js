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
      <div className="info-component container">
        <div className='col-md-2'>
        {this.props.citySelected && 
           <div> The Weather Condition:- {this.props.data.weather[0].description} </div>
        }
        </div>
      </div>
    );
  }
}

export default InfoComponent;
