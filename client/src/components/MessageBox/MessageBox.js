import React from 'react';
import './messagebox.scss';


export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='messageBox'>

        <form action='' id='messageBox_form'>
          <h6>Send a message</h6>
          <input type='text' name='subject' placeholder='Subject' maxlength="30" minlength='1'/>
          <input type='email' name='email' placeholder='E-mail' maxlength="30" minlength='1'/>
          <div id='textarea'>
            <textarea type='text' name='message' placeholder='Message' rows="6" maxlength="300" minlength='1'/>
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
