import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/Contact.css';
export default class Contact extends Component {
  state = {
    feedback: '',
    formSubmitted: false,
    name:'',
    showSpinner:false,
    buttonDisabled:false,
    buttonMessage:'Submit'
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';
handleNameChange=(e)=>{
  
  this.setState({
    name:e.target.value
  })
}
  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const receiv = 'donatelek92@gmail.com'
    const temp = 'contact_template'
    this.sendFeedback(
      temp,
      this.sender,
      this.state.name,
      this.state.feedback
    );
    this.setState({
      formSubmitted: true
    });
  }
  sendFeedback(templateId, senderEmail, name, feedback) {
    const receiv = 'donatelek92@gmail.com'
    const temp = 'contact_template'
    console.log(feedback)
    window.emailjs
      .send('mailgun', temp, {
        senderEmail,
        receiv,
        name,
        feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  handleSendButton=()=>{
this.setState({
  showSpinner:true,
  buttonMessage:''
})
setTimeout(()=>{
  this.setState({
    buttonDisabled:true,
    showSpinner:false,
    buttonMessage:'',
    feedback:'',
  name:'',
  })
},500)}

  render() {
    return (
      <div className="contact">
      <h1>Get in touch</h1>
      <form className="feedback-form" onSubmit={this.handleSubmit}>
      <h2>Your name</h2>
      <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Name"/>
        <h2>Your Message</h2>
        <textarea
          className="text-input"
          id="feedback-entry"
          name="feedback-entry"
          onChange={this.handleChange}
          placeholder="Enter your message here"
          required
          value={this.state.feedback}
        />
        <div className="btn-group">
          <input type="submit" value={this.state.buttonMessage} className="btn btn--submit" onClick={this.handleSendButton} disabled={this.state.buttonDisabled} />
          {this.state.showSpinner&&<div className="loader"></div>}
          {this.state.buttonDisabled&&<div className="sent"> Sent <i class="fas fa-check"></i></div>}
        </div>
      </form>
      </div>
    );
  }
}
