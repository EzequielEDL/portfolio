import React from 'react';
import { letter } from '../../../public/static';
import { MessageBox } from '../../components';
import './contact.scss';


export default class ContactView extends React.Component {
  constructor(props) {
    super(props);
    var asd= `${process.env.URL_EMAIL}`
  }

  render() {
    return (
      <section id='contact'>
        <div id='contact_headline'>
          <h5>Contact</h5>
          <h6>If you want talk with me</h6>
        </div>
        <div id='contact_content'>
          <div id='contact_content_left'>
            <ul>
              <li>You cant find me professional profile in <a href={process.env.URL_LINKEDIN} target="_blank">Linkedin</a></li>
              <li>Send a message for <a href={process.env.URL_TELEGRAM} target="_blank">Telegram</a></li>
              <li>Or just send me a simple mail to <a href={process.env.URL_EMAIL} target="_blank">im.edl.0110@gmail.com</a></li>
            </ul>
            <div id='contact_content_left_letter'>
              <img src={letter} />
              <h6>im.edl.0110</h6>
            </div>
          </div>
          <div id='contact_content_right'>
            <MessageBox />
          </div>
        </div>
      </section>
    )
  }
}
