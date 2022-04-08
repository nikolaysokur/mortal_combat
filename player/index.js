import {createElement} from '../utils/index.js';

class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
  }

  elHP = () => {
    return document.querySelector(`.${this.selector}  .life`);
  }
  
  changeHP = (randomNumber) => {
    this.hp -= (randomNumber);
  
    if (this.hp <= 0) {
        this.hp = 0;
    }
  }
  
  renderHP = () => {
    this.elHP().style.width = this.hp + '%';
  }

  createPlayer = () =>{
    const $player = createElement('div', this.selector),
          $progressbar = createElement('div', 'progressbar'),
          $character = createElement('div', 'character'),
          $life = createElement('div', 'life'),
          $name = createElement('div', 'name'),
          $img = createElement('img'); 
  
    $life.style.width = this.hp + '%';
    $name.innerText = this.name;
    $img.src = this.img;
  
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
  
    $character.appendChild($img);
  
    $player.appendChild($progressbar);
    $player.appendChild($character);

   const $root = document.querySelector(`.${this.rootSelector}`);
   $root.appendChild($player);

   return $player;
  }
  
}

export default Player;