import React, { Component } from 'react';
import data from '../../data/city-codes.json';
import {Typeahead} from 'react-bootstrap-typeahead'; 


class TypeaheadInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      highlightOnlyResult: false,
      minLength: 3,
      selectHintOnEnter: false,
      clearButton:true
    }
  }

  componentDidMount(){

  }

  getInputData = (selection)=>{
      this.props.onValueSelected(selection);
    console.log(selection);
  }

  render() {
    
    return (
      <div className="type-ahead">
            <Typeahead
              {...this.state}
              labelKey="name"
              options={data}
              placeholder="Choose a state..."
              onChange = {this.getInputData}
            />
      </div>
    );
  }
}

export default TypeaheadInput;
