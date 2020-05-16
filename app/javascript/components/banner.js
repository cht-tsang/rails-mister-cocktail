import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["You came for the cocktails but stayed for the music", "YO! Mr. White! - Jesse Pinkman"],
    typeSpeed: 40,
    loop: true
  });
}

export { loadDynamicBannerText };
