import React from 'react';
import './footer.scss';
import { telegramIcon, behanceIcon, githubIcon, linkedinIcon } from '../../../public/static';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='footer'>
        <div id='footer_line'><span></span></div>
        <div id='footer_content'>
          <ul>
            <li><a href={process.env.URL_GITHUB} target='_blank'><img src={githubIcon} alt='githubIcon'/></a></li>
            <li><a href={process.env.URL_TELEGRAM} target='_blank'><img src={telegramIcon} alt='telegramIcon'/></a></li>
            <li><a href={process.env.URL_LINKEDIN} target='_blank'><img src={linkedinIcon} alt='linkedinIcon'/></a></li>
            <li><a href={process.env.URL_BEHANCE} target='_blank'><img src={behanceIcon} alt='behanceIcon'/></a></li>
          </ul>
          <h4>Let's Talk?</h4>
          <button>Contact me</button>
        </div>
        <div id='footer_bottom' ><p>E.Delgado @ 2021. All rights reserved</p></div>
      </div>
    )
  }
}
