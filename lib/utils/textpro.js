const request = require("request");
const cheerio = require("cheerio");

const tema = {
  logo-wolf: "https://textpro.me/create-wolf-logo-black-white-937.html",
  natural-leaves: "https://textpro.me/natural-leaves-text-effect-931.html",
  logo-wolf2: "https://textpro.me/create-wolf-logo-galaxy-online-936.html",
  matrix: "https://textpro.me/matrix-style-text-effect-online-884.html",
  firework: "https://textpro.me/firework-sparkle-text-effect-930.html",
  thunder: "https://textpro.me/thunder-text-effect-online-881.html",
  black-pink: "https://textpro.me/create-blackpink-logo-style-online-1001.html",
  drop-water: "https://textpro.me/dropwater-text-effect-872.html",
  christmas: "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
  3d-gradient: "https://textpro.me/3d-gradient-text-effect-online-free-1002.html",
  porn-hub: "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
  cloud: "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
  summer: "https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
  sandwriting: "https://textpro.me/sand-engraved-3d-text-effect-989.html",
  sandengraved: "https://textpro.me/sand-engraved-3d-text-effect-989.html",
  summery: "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
  foil: "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html",
  glue: "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
  minion: "https://textpro.me/minion-text-effect-3d-online-978.html",
  deluxe: "https://textpro.me/deluxe-silver-text-effect-970.html",
  xmas: "https://textpro.me/xmas-cards-3d-online-942.html",
  blood: "https://textpro.me/blood-text-on-the-frosted-glass-941.html",
  halloween: "https://textpro.me/halloween-fire-text-effect-940.html",
  wicker: "https://textpro.me/wicker-text-effect-online-932.html"
  lava: "https://textpro.me/lava-text-effect-online-914.html",
  robot: "https://textpro.me/robot-r2-d2-text-effect-903.html",
  toxic: "https://textpro.me/toxic-text-effect-online-901.html",
  chocolate: "https://textpro.me/chocolate-cake-text-effect-890.html",
  strawberry: "https://textpro.me/strawberry-text-effect-online-889.html",
  ikankoi: "https://textpro.me/koi-fish-text-effect-online-888.html",
  bread: "https://textpro.me/bread-text-effect-online-887.html",
  horror: "https://textpro.me/horror-gift-text-effect-866.html"
  bokeh: "https://textpro.me/bokeh-text-effect-876.html",
  fruit: "https://textpro.me/fruit-juice-text-effect-861.html",
  bagel: "https://textpro.me/bagel-text-effect-857.html",
  biscuit: "https://textpro.me/biscuit-text-effect-858.html"
}


async function plogo-wolf(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.logo-wolf,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pnatural-leaves(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.natural-leaves,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function plogo-wolf2(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.logo-wolf2,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pmatrix(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.matrix,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pfirework(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.firework,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pthunder(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.thunder,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pblack-pink(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.black-pink,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pdrop-water(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.drop-water,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pchristmas(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.christmas,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function p3d-gradient(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.3d-gradient,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function pporn-hub(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.porn-hub,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function pcloud(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST', 
      url: tema.cloud,
      headers: { 'content-type': 'application/x-www-from-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
      
    request(options, async function (error, response, body) {
    if (error) throw new Error(error);
    const $ = cheerio.load(body)
    const result = {
         url: $('div.btn-group > a').attr('href')
    }
    resolve(result);
    });
  })
}

module.exports = {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
};
