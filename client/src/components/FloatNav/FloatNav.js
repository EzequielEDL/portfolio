import React from 'react';
import './floatnav.scss';
import { telegramIcon, behanceIcon, githubIcon, linkedinIcon } from '../../../public/static';


export default class FloatNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='floatnav'>
        <div></div>
        <ul>
          <li><a href={process.env.URL_GITHUB} target="_blank"><img src={githubIcon} alt='githubIcon'/></a></li>
          <li><a href={process.env.URL_TELEGRAM} target="_blank"><img src={telegramIcon} alt='telegramIcon'/></a></li>
          <li><a href={process.env.URL_LINKEDIN} target="_blank"><img src={linkedinIcon} alt='linkedinIcon'/></a></li>
          <li><a href={process.env.URL_BEHANCE} target="_blank"><img src={behanceIcon} alt='behanceIcon'/></a></li>
        </ul>
        <div></div>
      </div>
    )
  }
}
