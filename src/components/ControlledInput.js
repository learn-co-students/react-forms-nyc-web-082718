import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault
    this.sendDataSomewhere(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}
