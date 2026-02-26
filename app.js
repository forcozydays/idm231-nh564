let overlay, infoBox, title, image, matchedZodiac, desc, text, sound;
const signs = [
  { name: 'capricorn', 
    sound: 'BABYshushu', 
    image: 'elephant', 
    color: 'red', 
    desc: 'Quiet strength in the tiniest form. Calm, patient, and dependable — this little one moves slowly but with purpose. Never rushed, never shaken, always building something meaningful behind the scenes. A grounding presence that feels safe to keep close' 
  },

  { name: 'Sagittarius', 
    sound: 'GO', 
    image: 'frog', 
    color: 'yellow', 
    desc: 'A tiny burst of sunshine mid-leap. Playful, optimistic, and always curious about what is next. This one brings movement and laughter wherever it goes — a reminder that life is meant to be explored, even if you land somewhere unexpected.' 
  },

  { name: 'Scorpio', 
    sound: 'monalisa', 
    image: 'tiger', 
    color: 'red', 
    desc: 'Small but undeniably powerful. With sharp eyes and a quiet stance, this figure carries deep feelings beneath a calm exterior. Protective, intuitive, and impossible to ignore — it holds the kind of energy that lingers long after you walk away.' 
  },

  { name: 'Libra', 
    sound: '404newera', 
    image: 'duck', 
    color: 'blue', 
    desc: 'Soft smiles and floating grace. This little one brings harmony to every shelf, balancing sweetness with charm. Social, warm, and effortlessly lovable — it thrives where there is beauty and friendship.' 
  },

  { name: 'Virgo', 
    sound: 'jellyous', 
    image: 'sheep', 
    color: 'pink', 
    desc: 'Gentle, thoughtful, and quietly put together. This one notices the tiniest details and keeps everything in its right place. Soft energy with a strong sense of care — the kind that makes everything feel intentional.' 
  },

  { name: 'Leo', 
    sound: 'jump', 
    image: 'lion', 
    color: 'red', 
    desc: 'A golden glow in baby form. Radiant, proud, and born to be admired, this figure carries warmth and bold charm. Even standing still, it feels like the center of attention — dramatic in the sweetest way.' 
  },

  { name: 'Cancer', 
    sound: 'more-sukinapan', 
    image: 'rabbit', 
    color: 'yellow', 
    desc: 'Velvety ears and the gentlest heart. Sensitive and nurturing, this little one feels safest surrounded by love. It brings a cozy, protective energy — the type you instinctively want to keep nearby.' 
  },

  { name: 'Gemini', 
    sound: 'notcute', 
    image: 'shiba', 
    color: 'red', 
    desc: 'Bright-eyed and full of personality. Curious about everything, always ready to chat or explore. This one brings lively energy to the collection — a tiny reminder to stay curious and connected.' 
  },

  { name: 'Taurus', 
    sound: 'RnBDoggy', 
    image: 'cow', 
    color: 'red', 
    desc: 'Soft, steady, and comforting like a slow afternoon. This figure radiates warmth and reliability, happiest in familiar spaces filled with small pleasures. A grounding presence that feels like home.' 
  },

  { name: 'Aries', 
    sound: 'skrr', 
    image: 'horse', 
    color: 'blue', 
    desc: 'Full of spark and forward motion. Fearless and spirited, this little one charges ahead with excitement. Always first to begin, always ready to run toward something new — a tiny symbol of bravery' 
  },

  { name: 'Pisces', 
    sound: 'summer-in-seoul-city', 
    image: 'panda', 
    color: 'red', 
    desc: 'Soft and whimsical, like a daydream you don’t want to wake from. This figure carries a quiet emotional depth and a sweet imagination. Comforting, kind, and slightly magical.' 
  },

  { name: 'Aquarius', 
    sound: '동슈무띰하김', 
    image: 'mouse', 
    color: 'pink', 
    desc: 'Small but wonderfully different. Observant, clever, and living in its own little world. This one brings unexpected charm and reminds you that being unique is its own kind of magic.' 
  },
]

function displayHelp() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
  
    const helpBox = document.createElement('div');
    helpBox.id = 'helpBox'
  
    const title = document.createElement('h1');
    title.textContent = 'How to use';
  
    const instructions = document.createElement('p');
    instructions.textContent = 'Click on the calendar sign and enter your birthdate to reveal which Sonny Angel matches your zodiac sign~ Or explore the sonny angels by clicking on a card!';
  
    const close = document.createElement('p');
    close.textContent = 'Click anywhere to close this popup!';
  
    helpBox.appendChild(title);
    helpBox.appendChild(instructions);
    helpBox.appendChild(close);
  
    overlay.appendChild(helpBox);
    document.body.appendChild(overlay);
  
    overlay.addEventListener('click', () => {
        overlay.remove();
    })
}

function createSonnyAngelDetailBox() {
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.display = 'none';
  
    infoBox = document.createElement('div');
    infoBox.className = 'sonnyAngelDetails';
  
    title = document.createElement('h1');
    image = document.createElement('img');
    image.height = '325px';

    matchedZodiac = document.createElement('p');
    desc = document.createElement('p');

    text = document.createElement('div');
    text.className = 'textbox';
  
    text.appendChild(matchedZodiac);
    text.appendChild(desc);
  
    const close = document.createElement('button');
    close.textContent = 'close';
    close.className = 'close';

    close.addEventListener('click', () => {
        overlay.style.display = 'none';

        if (sound) {
          sound.pause();
          sound.currentTime = 0;
        }
    })
    
    infoBox.appendChild(title);
    infoBox.appendChild(image);
    infoBox.appendChild(text);
    infoBox.appendChild(close);
    overlay.appendChild(infoBox);
    document.body.appendChild(overlay);
}

function showSonnyAngels(signName) {
  overlay.style.display = 'flex';
  title.textContent = `${signName.image} Sonny Angel`;
  image.src = `assets/sonny-angel-full/${signName.image}.png`;
  matchedZodiac.textContent = `Matching Zodiac: ${signName.name}`;
  desc.textContent = `${signName.desc}`;

  if (sound) {
      sound.pause();
      sound.currentTime = 0;
  }

  sound = new Audio(`assets/music/${signName.sound}.mp3`);
  sound.play();
}

function getName(clicked) {
  console.log(clicked);
  if (clicked) {
    const name = signs.find((sign => sign.name.toLowerCase() === clicked.toLowerCase()))
    console.log(name)

    if (name) {
        showSonnyAngels(name);
    }
  }
}

function selectedSonnyAngel(event) {
    const selected = event.target.closest('div').id;
    getName(selected);
}

function createGrid(signsList) {
    const gridInfo = document.getElementById('displaySonnyAngels');

    for (let i = 0; i < signsList.length; i++) {
        const displayBox = document.createElement('div');
        displayBox.className = signsList[i].color;
        displayBox.id = signsList[i].name;

        const image = document.createElement('img');
        const imageName = `assets/sonny-angel-half/${signsList[i].image}.png`;
        image.setAttribute('src', imageName);

        displayBox.appendChild(image);
        gridInfo.appendChild(displayBox);
    }
    gridInfo.addEventListener('click', (event) => selectedSonnyAngel(event))
}

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else return null;
}

function getBdate(date) {
    const splitDate = {
        year: date[0],
        month: date[1],
        day: date[2],
      }
      const month = parseInt(splitDate.month, 10);
      const day = parseInt(splitDate.day, 10);
    
      const zodiac = getZodiac(month, day);
      getName(zodiac);
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
  
    const date = form.elements['birthday'].value;
    if (!date) {
      window.alert('please enter your birthdate!');
      return;
    }
    const splitDate = date.split('-');
    getBdate(splitDate);
}

function initalize() {
    
    const help = document.getElementById('help')
    help.addEventListener('click', displayHelp);

    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

    createGrid(signs);
    createSonnyAngelDetailBox();
}

document.addEventListener('DOMContentLoaded', initalize);