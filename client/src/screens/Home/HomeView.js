import React from 'react';
import './home.scss';
import { brush, photo } from '../../../public/static';
import { FloatNav } from '../../components';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  async compressChar(selector, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        selector.innerText = selector.innerText.slice(0, -1);
        resolve();
      }, time/2)
    })
  }

  async descompressChar(selector, char="", time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        selector.textContent += char;
        resolve();
      }, time)
    })
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  calculateTime(word, char) {
    const timePerWord = 4000;
    let timePerChar = timePerWord / word.length;
    if(char === " ") return timePerChar - 50;
    else return timePerChar + this.random(-100, 100);
  }

  async changeNames(selector, words, i=0) {
    if(i < words.length) {
      for(const char of words[i]) {
        await this.descompressChar(selector, char, this.calculateTime(words[i], char));
      }
      for(const char of words[i]) {
        await this.compressChar(selector, this.calculateTime(words[i], char));
      }
      this.changeNames(selector, words, i+=1);
    } else this.changeNames(selector, words, 0);
  }

  async componentDidMount() {
    let brush = document.getElementById('brush');
    let photo = document.getElementById('photo');
    let text = document.getElementById('text');
    let targets = document.getElementById('targets');
    let iconScroll = document.getElementById('icon_scroll');

    await this.changeNames(targets, ['Full stack developer', 'UX/UI Designer', 'Data analytics']);

    window.addEventListener('scroll', function() {
      var value = window.scrollY;

      brush.style.marginLeft = -value * 0.3 + 'px';
      photo.style.bottom = -value * 0.1 + 'px';
      text.style.marginTop = value * 1 + 'px';
      iconScroll.style.opacity = value * (iconScroll.style.opacity * 0.1);
      if (iconScroll.style.opacity <= 0) iconScroll.style.display = 'none';
    })
  }

  render() {
    return (
      <section id='home'>
        <FloatNav />

        <div className='home_content'>
          <img src={brush} alt='brush' id='brush' />
          <img src={photo} alt='photo' id='photo' />

          <div id='text'>
            <h2><div></div>Esequiel Delgado</h2>
            <h4 id='targets'></h4>
            <button>Contact me</button>
          </div>
        </div>

        <div id='icon_scroll'>
          <div><span></span></div>
          <p>Scroll for more</p>
        </div>
      </section>
    )
  }
}
