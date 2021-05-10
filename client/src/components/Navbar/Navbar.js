import React from 'react';
import './navbar.scss';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='navbar'>
        <div className='navbar_title'>
          <h1>E.Delgado</h1>
        </div>
        <div className='navbar_box'>
          <ul>
            <li><a href="#home"><div>Home</div></a></li>
            <li><a href="#about"><div>About</div></a></li>
            <li><a href="#projects"><div>Projects</div></a></li>
            <li><a href="#contact"><div>Contact</div></a></li>
            <li><a href="#resume"><div>Resume</div></a></li>
          </ul>
        </div>
      </div>
    )
  }
}
