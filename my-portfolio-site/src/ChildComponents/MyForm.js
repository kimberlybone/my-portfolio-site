import React from 'react';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Axios from 'axios'

class MyForm extends React.Component {
  constructor( props ){
    super( props )
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    }
  }

  handleChange = e => {
    const inputName = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    this.setState({ [inputName]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      disabled: true
    })

    Axios.post( 'http://localhost:3030/api/email', this.state )
        .then( res => {
          if( res.data.success ){
          this.setState({
            disabled: false,
            emailSent: true
          })
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          })
        }
      })
      .catch( err => {
        this.setState({
          disabled: false,
          emailSent: false
        })
    })
  }

  render(){

    return(
      <Form onSubmit={ this.handleSubmit }>
        <Form.Group>
          <Form.Label htmlFor="full-name">Full Name</Form.Label>
          <Form.Control id="full-name"
                        name="name"
                        type="text"
                        value={ this.state.name }
                        onChange={ this.handleChange }
                        x-webkit-speech></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control id="email"
                        name="email"
                        type="email"
                        value={ this.state.email }
                        onChange={ this.handleChange }></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control id="message"
                        name="message"
                        as="textarea"
                        rows="5"
                        value={ this.state.message }
                        onChange={ this.handleChange }></Form.Control>
        </Form.Group>

        <Button className="d-inline-block" type="submit" disabled={ this.state.disabled } onSubmit={ this.handleSubmit }>
          Send
        </Button>
        { this.state.emailSent && <p className="d-inline success-msg"> Email Sent! </p>}
        { this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent :( </p>}
      </Form>
    )
  }
}
export default MyForm
