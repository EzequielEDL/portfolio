import React from 'react';
import './messagebox.scss';


export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    document.getElementById('messageBox_form').addEventListener('submit', function(e) {
      e.preventDefault();

      let subject = document.querySelector('#subject').value;
      let email = document.querySelector('#email').value;
      let message = document.querySelector('#message').value;
      console.log(subject)

    })
  }

  render() {
    return (
      <div id='messageBox'>

        <form action='' id='messageBox_form'>
          <h6>Send a message</h6>
          <input id='subject' type='text' name='subject' placeholder='Subject' maxLength="30" minLength='1'/>
          <input id='email' type='email' name='email' placeholder='E-mail' maxLength="30" minLength='1'/>
          <div id='textarea'>
            <textarea id='message' type='text' name='message' placeholder='Message' rows="6" maxLength="300" minLength='1'/>
            <div></div>
          </div>
          <div id='messageBox_button'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    )
  }
}
