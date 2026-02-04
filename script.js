const text = document.getElementById("text");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noResponses = [
  {
    text: "Are you sure? 🥺",
    gif: "https://tenor.com/edX4ARdm6wr.gif"
  },
  {
    text: "Don’t do this to me!! 😭",
    gif: "https://tenor.com/hhRyQ5ck1kD.gif"
  },
  {
    text: "Yaar itne nakhre 😌",
    gif: "https://tenor.com/hmYvvAe87mo.gif"
  }
];

const yesValentine = {
  text: "I knew it, you can’t live without me 😌💖",
  gif: "PASTE_DANCING_GIF_LINK_HERE"
};

const holdHandNo = {
  text: "Are you really sure? 💔",
  gif: "https://tenor.com/rZOb1FX42Vv.gif"
};

const finalYes = {
  text: "Come here… 🥹🤍",
  gif: "https://tenor.com/sFYE9X0AS8O.gif"
};

let noCount = 0;
let stage = 1;

/* ---------------- EVENTS ---------------- */

noBtn.onclick = () => {
  if (stage === 1) {
    const response = noResponses[noCount % noResponses.length];
    text.innerText = response.text;
    gif.src = response.gif;
    noCount++;
  } else if (stage === 2) {
    text.innerText = holdHandNo.text;
    gif.src = holdHandNo.gif;
  }
};

yesBtn.onclick = () => {
  if (stage === 1) {
    text.innerText = yesValentine.text;
    gif.src = yesValentine.gif;
    stage = 2;

    setTimeout(() => {
      text.innerText = "May I hold your hand, Princess? 🤍✋";
    }, 2000);

  } else if (stage === 2) {
    text.innerText = finalYes.text;
    gif.src = finalYes.gif;
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
  }
};
