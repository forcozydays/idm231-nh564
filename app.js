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

const signs = [
    { name: 'capricorn', sound: '', image: 'elephant', color: 'red' },

    { name: 'Sagittarius', sound: '', image: 'frog', color: 'yellow' },

    { name: 'Scorpio', sound: '', image: 'tiger', color: 'red' },

    { name: 'Libra', sound: '', image: 'duck', color: 'blue' },

    { name: 'Virgo', sound: '', image: 'sheep', color: 'pink' },

    { name: 'Leo', sound: '', image: 'lion', color: 'red' },

    { name: 'Cancer', sound: '', image: 'rabbit', color: 'yellow' },

    { name: 'Gemini', sound: '', image: 'shiba', color: 'red' },

    { name: 'Taurus', sound: '', image: 'cow', color: 'red' },

    { name: 'Aries', sound: '', image: 'horse', color: 'blue' },

    { name: 'Pisces', sound: '', image: 'panda', color: 'red' },

    { name: 'Aquarius',  sound: '', image: 'mouse', color: 'pink' },
]

const gridInfo = document.getElementById('displaySonnyAngels');

for (let i = 0; i < signs.length; i++) {
  const displayBox = document.createElement('div');
  displayBox.setAttribute('class', signs[i].color);
  // console.log(displayBox.getAttribute('class')); //testing

  const image = document.createElement('img');
  const imageName = `assets/sonny-angel-half/${signs[i].image}.png`;
  image.setAttribute('src', imageName);
  // console.log(image); //testing

  displayBox.appendChild(image);
  gridInfo.appendChild(displayBox);
}


const help = document.getElementById('help');
help.addEventListener('click', () => {
  
});