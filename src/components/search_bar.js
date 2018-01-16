import React from 'react';

export default class SearchBaar extends React.Component{
  onInputChange(e){
    this.setState({term:e.target.value});
    console.log(this.state.term);
      }
  constructor(props){
    super(props);
    this.state = { term :''};
  }
    render(){
        return(
               <div className= "container">
                <div className="row">
                   <input type="text" value={this.state.term}  placeholder="Enter the description" onChange={this.onInputChange.bind(this)} />
                </div>
               </div>
               )
    }
}