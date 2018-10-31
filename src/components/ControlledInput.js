// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  } //end of state


  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.value]: event.target.value
    }, () => console.log(event.target.value))
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }








}
export default ControlledInput
