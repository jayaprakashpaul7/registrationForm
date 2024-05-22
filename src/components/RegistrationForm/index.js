import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    toggleResponse: false,
    errorName: '',
    errorLastname: '',
  }

  changeUsername = event => {
    this.setState({firstName: event.target.value})
  }

  changePassword = event => {
    this.setState({lastName: event.target.value})
  }

  emptyFirstname = event => {
    const errorFirstname = event.target.value === '' ? 'Required' : ''
    this.setState({errorName: errorFirstname})
  }

  emptyLastname = event => {
    const errorLastname = event.target.value === '' ? 'Required' : ''
    this.setState({errorLastname})
  }

  renderUsername = () => {
    const {firstName, errorName} = this.state
    return (
      <>
        <label htmlFor="username">FIRST NAME</label>

        <input
          type="text"
          id="username"
          value={firstName}
          placeholder="First name"
          onChange={this.changeUsername}
          onBlur={this.emptyFirstname}
        />
        <p>{errorName}</p>
      </>
    )
  }

  renderPassword = () => {
    const {lastName, errorLastname} = this.state
    return (
      <>
        <label htmlFor="password">LAST NAME</label>
        <input
          type="text"
          id="password"
          value={lastName}
          placeholder="Last name"
          onChange={this.changePassword}
          onBlur={this.emptyLastname}
        />
        <p>{errorLastname}</p>
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' || lastName === '') {
      this.setState({
        errorName: firstName === '' ? 'Required' : '',
        errorLastname: lastName === '' ? 'Required' : '',
      })
    } else {
      this.setState({toggleResponse: true})
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      toggleResponse: false,
      errorName: '',
      errorLastname: '',
    })
  }

  render() {
    const {toggleResponse} = this.state
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.onSubmitForm}>
          {toggleResponse ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button type="button" onClick={this.resetForm}>
                Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              <div>{this.renderUsername()}</div>

              <div>{this.renderPassword()}</div>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
