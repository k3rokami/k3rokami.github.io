// config
const config = {
  title: "くろかみのリンク",
  bio: [
    "你好，我是苦肉卡米。",
    "Hello, I'm Kurokami.",
    "こんにんは、くろかみといいます。"
  ],
  background: {
    images: [
      './Background/train.gif',
      './Background/280636.gif',
      './Background/20f4e111db1ee580cccc50da6d6833eb.gif',
      './Background/92338017c079bea4f1250ed4a3056117.gif'
    ]
  },
  links: [
    {
      name: 'Discord',
      text: 'k3rokami',
      // text: 'Kurokami#9877'
      icon: './Icons/Discord.svg'
    },
    {
      name: 'VRChat',
      url: 'https://vrchat.com/home/user/usr_37ef9e8e-c51a-4fdd-b008-dd8bae1c0394',
      text: 'Kurokami_くろかみ',
      icon: './Icons/VRChat.ico'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/k3rokami',
      text: '✿くろかみ✿',
      icon: './Icons/Twitter.png'
    },
    {
      name: 'Twitter(プライベート)',
      url: 'https://twitter.com/kurokami_vrc',
      text: 'くろかみ',
      icon: './Icons/Twitter.png'
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/k3rokami/',
      text: 'Kurokami',
      icon: './Icons/Steam.png'
    }
  ],
  credit: false,
};

// DOM elements
const container = document.getElementById('container');
const linkContainer = document.getElementById('linkContainer');
const linkHeader = document.getElementById('linkHeader');
const linkBio = document.getElementById('linkBio');
const linkList = document.getElementById('linkList');
const credit = document.getElementById('credit');

// title
document.title = config.title;
linkHeader.innerHTML = config.title;

// background
const backgroundStyle = document.createElement('style');

// Generate a random index within the range of the array length
const randomIndex = Math.floor(Math.random() * config.background.images.length);

// Use this random index to select a background image from the array
const randomImage = config.background.images[randomIndex];

backgroundStyle.innerHTML = `
  #container {
    background-image: url('${randomImage}');
  }
`;

document.head.appendChild(backgroundStyle);

// bio
config.bio.forEach((line) => {
  const el = document.createElement('p');
  el.innerHTML = line;

  linkBio.appendChild(el);
});

// links
config.links.forEach((link) => {
  let el = document.createElement('div');

  if (link.url) {
    el = document.createElement('a');
    el.classList.add('clickable');
    el.href = link.url;
    el.target = '_blank';
  }

  el.classList.add('link');

  // Add an <img> tag for the icon
  el.innerHTML = `
    <img src='${link.icon}' class='icon'>
    <span class='name'>${link.name}</span>
    <span class='text'>${link.text}</span>
  `;

  linkList.appendChild(el);
});

// credit
if (!config.credit) {
  credit.style.display = 'none';
}
