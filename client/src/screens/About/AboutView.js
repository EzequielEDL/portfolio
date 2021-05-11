import React from 'react';
import './about.scss';


export default class AboutView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section id='about'>
        <div id='about_headline'>
          <h5>About</h5>
          <h6>What about this guy?</h6>
        </div>
        <div id='about_content'>

        </div>
        <button id='about_button'>Resume</button>
      </section>
    )
  }
}
