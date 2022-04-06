"use strict"

const player1 = {
  name:'Scorpion',
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ['sword'],
  attack: function() {
    console.log(this.name + ' Fight..');
  }
};

const player2 = {
  name:'SubZero',
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ['hand'],
  attack: function() {
    console.log(this.name + ' Fight..');
  }
};

const root = document.querySelector('.root'),
      arenas = document.createElement('div');
arenas.classList.add("arenas");
root.append(arenas);


function createPlayer(className, name, life, img) {
  const player = document.createElement('div');
  player.classList.add(`"${className}"`);
  player.innerHTML=`
      <div class="progressbar">
          <div class="life">${life}</div>
          <div class="name">${name}</div>
      </div>
      <div class="character">
          <img src="${img}" />
      </div>
`;
arenas.append(player);
}







createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);