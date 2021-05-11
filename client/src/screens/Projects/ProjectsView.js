import React from 'react';
import './projects.scss';


export default class ProjectsView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section id='projects'>
        <div id='projects_headline'>
          <h5>Projects</h5>
          <h6>Things i’ve made</h6>
        </div>
        <div id='projects_content'>

        </div>
        <button id='projects_button'>See GitHub</button>
      </section>
    )
  }
}
