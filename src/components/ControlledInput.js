// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }
  handleChange = event => {
    debugger
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value,
    });
  }
  handleLastNameChange=event=> {
    this.setState({
      lastName: event.target.value
    })
  }
  render() {
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
      </form>
    );
  }

}
