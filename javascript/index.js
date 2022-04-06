const adviceHTML = document.getElementsByClassName("card--advice")[0];
const idHTML = document.getElementsByClassName("card--number")[0];
const button = document.getElementsByClassName("card--dice")[0];

button.onclick = () => {
  getData();
};

const advice = (data) => {
  const id = data.slip.id;
  const advice = data.slip.advice;
  idHTML.innerHTML = `ADVICE #${id}`;
  adviceHTML.innerHTML = `"${advice}"`;
};

const getData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice",{
    cache: 'no-cache',
  });
  if (response.status === 200) {
    const data = await response.json();
    advice(data);
  }
};

getData();
