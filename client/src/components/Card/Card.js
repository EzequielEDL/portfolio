import React from 'react';
import './card.scss';


export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='card'>
        <div id='card_content'>
          <a href={this.props.url} target="_blank">
            <img src={this.props.image} alt={this.props.name}/>
          </a>
        </div>
        <div id='card_description'>
          <h6>{this.props.name}</h6>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
