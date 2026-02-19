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

function closePopUp(itemName) {
  itemName.addEventListener('click', () => {
    itemName.remove();
  })
}

function displayHelp() {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const helpBox = document.createElement('div');
  helpBox.id = 'helpBox'

  const title = document.createElement('h1');
  title.textContent = 'How to use';

  const instructions = document.createElement('p');
  instructions.textContent = 'Click on the calendar sign and enter your birthdate to reveal which Sonny Angel matches your zodiac sign~ '
  instructions.textContent += 'Or explore the sonny angels by clicking on a card!';

  const close = document.createElement('p');
  close.textContent = 'Click anywhere to close this popup!';

  helpBox.appendChild(title);
  helpBox.appendChild(instructions);
  helpBox.appendChild(close);

  overlay.appendChild(helpBox);
  document.body.appendChild(overlay);

  closePopUp(overlay);
}

function handleSubmit(event) {
  event.preventDefault();

  const bdate = document.querySelector('form').elements['birthday'].value.split('-');
}

function getBdate(date) {


  const splitDate = {
    year: date[0],
    month: date[1],
    day: date[2],
  }

  return date;
}

function showSonnyAngels(signName) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const infoBox = document.createElement('div');
  infoBox.className = 'sonnyAngelDetails';

  const title = document.createElement('h1');
  title.textContent = `${signName.image} Sonny Angel`;

  const image = document.createElement('img');
  image.src = `assets/sonny-angel-full/${signName.image}.png`;
  image.height = '325px';

  const desc = document.createElement('p');
  desc.textContent = `${signName.desc}`;

  const close = document.createElement('button');
  close.textContent = 'close';
  close.className = 'close';

  close.addEventListener('click', () => {
    overlay.remove();
  })

  infoBox.appendChild(title);
  infoBox.appendChild(image);
  infoBox.appendChild(desc);
  infoBox.appendChild(close);
  overlay.appendChild(infoBox);
  document.body.appendChild(overlay);
}

// need to pass in a parameter when doing on click to check what is being clicked (see using params w event listeners page)


const signs = [
    { name: 'capricorn', 
      sound: '', 
      image: 'elephant', 
      color: 'red', 
      desc: 'Quiet strength in the tiniest form. Calm, patient, and dependable — this little one moves slowly but with purpose. Never rushed, never shaken, always building something meaningful behind the scenes. A grounding presence that feels safe to keep close' 
    },

    { name: 'Sagittarius', 
      sound: '', 
      image: 'frog', 
      color: 'yellow', 
      desc: 'A tiny burst of sunshine mid-leap. Playful, optimistic, and always curious about what is next. This one brings movement and laughter wherever it goes — a reminder that life is meant to be explored, even if you land somewhere unexpected.' 
    },

    { name: 'Scorpio', 
      sound: '', 
      image: 'tiger', 
      color: 'red', 
      desc: 'Small but undeniably powerful. With sharp eyes and a quiet stance, this figure carries deep feelings beneath a calm exterior. Protective, intuitive, and impossible to ignore — it holds the kind of energy that lingers long after you walk away.' 
    },

    { name: 'Libra', 
      sound: '', 
      image: 'duck', 
      color: 'blue', 
      desc: 'Soft smiles and floating grace. This little one brings harmony to every shelf, balancing sweetness with charm. Social, warm, and effortlessly lovable — it thrives where there is beauty and friendship.' 
    },

    { name: 'Virgo', 
      sound: '', 
      image: 'sheep', 
      color: 'pink', 
      desc: 'Gentle, thoughtful, and quietly put together. This one notices the tiniest details and keeps everything in its right place. Soft energy with a strong sense of care — the kind that makes everything feel intentional.' 
    },

    { name: 'Leo', 
      sound: '', 
      image: 'lion', 
      color: 'red', 
      desc: 'A golden glow in baby form. Radiant, proud, and born to be admired, this figure carries warmth and bold charm. Even standing still, it feels like the center of attention — dramatic in the sweetest way.' 
    },

    { name: 'Cancer', 
      sound: '', 
      image: 'rabbit', 
      color: 'yellow', 
      desc: 'Velvety ears and the gentlest heart. Sensitive and nurturing, this little one feels safest surrounded by love. It brings a cozy, protective energy — the type you instinctively want to keep nearby.' 
    },

    { name: 'Gemini', 
      sound: '', 
      image: 'shiba', 
      color: 'red', 
      desc: 'Bright-eyed and full of personality. Curious about everything, always ready to chat or explore. This one brings lively energy to the collection — a tiny reminder to stay curious and connected.' 
    },

    { name: 'Taurus', 
      sound: '', 
      image: 'cow', 
      color: 'red', 
      desc: 'Soft, steady, and comforting like a slow afternoon. This figure radiates warmth and reliability, happiest in familiar spaces filled with small pleasures. A grounding presence that feels like home.' 
    },

    { name: 'Aries', 
      sound: '', 
      image: 'horse', 
      color: 'blue', 
      desc: 'Full of spark and forward motion. Fearless and spirited, this little one charges ahead with excitement. Always first to begin, always ready to run toward something new — a tiny symbol of bravery' 
    },

    { name: 'Pisces', 
      sound: '', 
      image: 'panda', 
      color: 'red', 
      desc: 'Soft and whimsical, like a daydream you don’t want to wake from. This figure carries a quiet emotional depth and a sweet imagination. Comforting, kind, and slightly magical.' 
    },

    { name: 'Aquarius', 
      sound: '', 
      image: 'mouse', 
      color: 'pink', 
      desc: 'Small but wonderfully different. Observant, clever, and living in its own little world. This one brings unexpected charm and reminds you that being unique is its own kind of magic.' 
    },
]

const gridInfo = document.getElementById('displaySonnyAngels');

for (let i = 0; i < signs.length; i++) {
  const displayBox = document.createElement('div');
  displayBox.setAttribute('class', signs[i].color);

  const image = document.createElement('img');
  const imageName = `assets/sonny-angel-half/${signs[i].image}.png`;
  image.setAttribute('src', imageName);

  displayBox.appendChild(image);
  gridInfo.appendChild(displayBox);

  displayBox.addEventListener('click', () => {
    showSonnyAngels(signs[i]);
  })
}

const help = document.getElementById('help')
help.addEventListener('click', displayHelp);