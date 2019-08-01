import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    feedback: '',
    formSubmitted: false,
    name: '',
    showSpinner: false,
    buttonDisabled: false,
    buttonMessage: 'Submit',
    errors: {
      name: false,
      feedback: false
    }
  };

  errorMessages = {
    name: 'Write your name',
    feedback: 'Write your message'
  }

  static sender = 'sender@example.com';

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleCancel = () => {
    this.setState({
      feedback: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.feedback.length || !this.state.name.length) {
      let name = false;
      let feedback = false;
      if (this.state.name.length < 1) {
        name = true
      }
      if (this.state.feedback.length < 1) {
        feedback = true
      }
      this.setState({
        errors: {
          name,
          feedback
        }
      })
      setTimeout(() => {
        this.setState({
          errors: {
            name: false,
            feedback: false
          }
        })
      }, 2000)
      return
    }

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

  sendFeedback = (templateId, senderEmail, name, feedback) => {
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

  handleSendButton = () => {
    if (!this.state.feedback.length || !this.state.name.length) {
      return
    }
    this.setState({
      showSpinner: true,
      buttonMessage: ''
    })
    setTimeout(() => {
      this.setState({
        buttonDisabled: true,
        showSpinner: false,
        buttonMessage: '',
        feedback: '',
        name: '',
      })
    }, 500)
  }

  render() {
    return (
      <div className="contact">
        <h1 id='contact'>Contact Me</h1>
        <form className="feedback-form" onSubmit={this.handleSubmit}>
          <h2>Your name</h2>
          <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Name" />
          {this.state.errors.name && <div className="error">{this.errorMessages.name}</div>}
          <h2>Your Message</h2>
          <textarea
            className="text-input"
            id="feedback-entry"
            name="feedback-entry"
            onChange={this.handleChange}
            placeholder="Enter your message here"
            value={this.state.feedback}
          />
          {this.state.errors.feedback && <div className="error">{this.errorMessages.feedback}</div>}
          <div className="btn-group">
            <input type="submit" value={this.state.buttonMessage} className="btn btn--submit" onClick={this.handleSendButton} disabled={this.state.buttonDisabled} />
            {this.state.showSpinner && <div className="loader"></div>}
            {this.state.buttonDisabled && <div className="sent"> Sent <i class="fas fa-check"></i></div>}
          </div>
        </form>
      </div>
    );
  }
}
